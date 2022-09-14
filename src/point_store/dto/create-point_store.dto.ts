import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

export class CreatePointStoreDto {
  @IsNumber()
  @Min(0)
  @ApiProperty({
    description: '유저가 미션(만보기, 출석체크 등등)으로 획득한 포인트',
    type: Number,
    name: 'points',
    example: 200,
  })
  points: number;

  @IsEnum(['만보기', '출석체크', '위치인증'])
  @IsString()
  @ApiProperty({
    name: 'type',
    type: String,
    description:
      '해당 포인트의 타입 입력. 현재 만보기, 출석체크, 위치인증만 입력 가능합니다.',
    example: '만보기',
  })
  type: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'name',
    type: String,
    description: '해당 미션의 명칭 입력',
    example: '1000걸음',
  })
  name: string;

  // @IsDate()
  // @IsNotEmpty()
  // @ApiProperty({
  //   name: 'expire_at',
  //   type: Date,
  //   description: '해당 포인트가 만료되는 날짜 입력',
  //   example: '2022-10-12',
  // })
  @IsEmpty()
  expire_at: Date;
}
