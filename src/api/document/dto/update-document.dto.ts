import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UpdateDocumentDto {
  @ApiProperty({
    description: 'Tipo de Biometria',
    example: 'RG',
    type: String,
  })
  @IsOptional()
  tipodocumento: string;

  @ApiProperty({
    description: 'Numero do Documento',
    example: '123456789',
    type: String,
  })
  @IsOptional()
  numerodocumento: string;

  @ApiProperty({
    description: 'Validade do Documento',
    example: '01-01-2000',
    type: String,
  })
  @IsOptional()
  validade: string;

  @ApiProperty({
    description: 'Status do Documento',
    example: true,
    type: Boolean,
  })
  @IsOptional()
  status: string;

  @ApiProperty({
    description: 'Arquivo do Documento',
    example: 'https://example.com/dados',
    type: String,
  })
  @IsOptional()
  arquivoDocumento: string;

  @ApiProperty({
    description: 'Motivo Rejeicao',
    example: 'Motivo do documento ter sido rejeitado',
    type: String,
  })
  @IsOptional()
  motivo?: string;
}
