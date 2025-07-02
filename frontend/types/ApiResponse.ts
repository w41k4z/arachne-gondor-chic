export class ApiResponse<T> {
  constructor(
    public message: string | null = null,
    public payload: T | null = null,
    public error: any = null
  ) {}
}
