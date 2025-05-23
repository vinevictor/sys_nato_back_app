import { ApiResponseProperty } from '@nestjs/swagger';

export class Biometria {
  @ApiResponseProperty({ type: Number })
  id: number;

  @ApiResponseProperty({ type: Number })
  userId: number;

  @ApiResponseProperty({ type: String })
  tipoBiometria: string;

  @ApiResponseProperty({ type: String })
  dadosBiometricos: string;

  @ApiResponseProperty({ type: String })
  motivo: string | null;

  constructor(partial: Partial<Biometria>) {
    Object.assign(this, partial);
  }
}
