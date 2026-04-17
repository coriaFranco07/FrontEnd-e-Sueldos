import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UserService, User, PaginatedResponse } from '../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { UserFormDialogComponent } from '../user-form-dialog/user-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'role', 'isEmailVerified', 'actions'];
  dataSource = new MatTableDataSource<User>([]);
  isLoading = false;
  totalResults = 0;
  pageSize = 10;
  currentPage = 0;

  // Filtros
  nameFilter = new FormControl('');
  roleFilter = new FormControl('');

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadUsers();

    // Filtros con debounce - resetear página al filtrar
    this.nameFilter.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
      this.currentPage = 0; // Reset a primera página
      this.loadUsers();
    });

    this.roleFilter.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
      this.currentPage = 0; // Reset a primera página
      this.loadUsers();
    });
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe((sort: Sort) => {
      this.currentPage = 0; // Reset a primera página
      this.loadUsers();
    });
  }

  loadUsers(): void {
    this.isLoading = true;
    
    // Formatear sortBy en el formato esperado por el backend: campo:asc o campo:desc
    let sortBy: string | undefined;
    if (this.sort?.active) {
      const direction = this.sort.direction === 'desc' ? 'desc' : 'asc';
      sortBy = `${this.sort.active}:${direction}`;
    }
    
    const searchTerm = this.nameFilter.value?.trim() || undefined;
    const role = this.roleFilter.value?.trim() || undefined;

    console.log('📤 Enviando solicitud con:', {
      page: this.currentPage + 1,
      limit: this.pageSize,
      sortBy,
      role,
      name: searchTerm
    });

    this.userService.getUsers(
      this.currentPage + 1, // API usa 1-based
      this.pageSize,
      sortBy,
      role,
      searchTerm
    ).subscribe({
      next: (response: PaginatedResponse<User>) => {
        this.dataSource.data = response.results;
        this.totalResults = response.totalResults;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading users:', error);
        this.snackBar.open('Error al cargar usuarios', 'Cerrar', { duration: 3000 });
        this.isLoading = false;
      }
    });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadUsers();
  }

  resetFilters(): void {
    this.nameFilter.reset();
    this.roleFilter.reset();
    this.currentPage = 0;
    this.loadUsers();
    this.snackBar.open('Filtros limpiados', 'Cerrar', { duration: 2000 });
  }

  getRoleColor(role: string): string {
    return role === 'admin' ? 'accent' : 'primary'; // Naranja para admin, azul para user
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '500px',
      data: { mode: 'create' }
    });

    dialogRef.afterClosed().subscribe(created => {
      if (created) {
        this.snackBar.open('Usuario creado correctamente', 'Cerrar', { duration: 3000 });
        this.loadUsers();
      }
    });
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(UserFormDialogComponent, {
      width: '500px',
      data: { mode: 'edit', user }
    });

    dialogRef.afterClosed().subscribe(updated => {
      if (updated) {
        this.snackBar.open('Usuario actualizado correctamente', 'Cerrar', { duration: 3000 });
        this.loadUsers();
      }
    });
  }

  deleteUser(user: User): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Eliminar Usuario',
        message: `¿Estás seguro que deseás eliminar a ${user.name}?`,
        confirmText: 'Eliminar',
        cancelText: 'Cancelar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(user.id).subscribe({
          next: () => {
            this.snackBar.open('Usuario eliminado exitosamente', 'Cerrar', { duration: 3000 });
            this.loadUsers();
          },
          error: (error) => {
            console.error('Error deleting user:', error);
            this.snackBar.open('Error al eliminar usuario', 'Cerrar', { duration: 3000 });
          }
        });
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/principal']);
  }
}
