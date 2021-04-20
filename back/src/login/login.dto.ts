import { Trim } from 'class-sanitizer';
import { IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @Trim()
  @IsOptional()
  public username?: string;

  @Trim()
  @IsOptional()
  public email?: string;

  @IsString()
  public password!: string;
}
