import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class UpdatePointStoreDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    name: 'name',
    description: '포인트 상품에 대한 이름을 작성합니다.',
    type: String,
    example: '500 P',
    required: false,
  })
  name: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiProperty({
    name: 'price',
    description: '해당 포인터를 구매할수 있는 가격(현금)',
    type: String,
    example: 5000,
    required: false,
  })
  price: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  @ApiProperty({
    name: 'exchange_point',
    description: '판매되고 있는 포인트',
    type: String,
    example: 500,
    required: false,
  })
  exchange_point: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    name: 'describ',
    description: '해당 판매 아이템에 대한 설명',
    type: String,
    example: '5000 won => 500P',
    required: false,
  })
  describ: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    name: 'picture1',
    description: '해당 상품에 대한 사진1',
    type: String,
    example:
      'https://1.bp.blogspot.com/-WVlwbtplo5s/XkKp9Y7ugdI/AAAAAAAAJd8/HkHDeibjL9ApCD-lEnIUvqa_tCRAyCYVACLcBGAsYHQ/s1600/%25ED%258F%25AC%25ED%2583%25882%2B%25EA%25B2%258C%25EC%259E%2584%2B%25EA%25B0%259C%25EB%25B0%259C%25EC%259E%2590%2B%25EC%25BD%2598%25EC%2586%2594%2B%25EB%25AA%25A8%25EB%2593%259C%252C%2B%25EC%25B9%2598%25ED%258A%25B8%25ED%2582%25A4.jpg',
    required: false,
  })
  picture1: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    name: 'picture2',
    description: '해당 상품에 대한 사진2',
    type: String,
    example: 'https://photo.coolenjoy.co.kr/bbs/data/38/68049812.jpg',
    required: false,
  })
  picture2: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    name: 'picture3',
    description: '해당 상품에 대한 사진3',
    type: String,
    example:
      'https://w7.pngwing.com/pngs/189/651/png-transparent-portal-2-firearm-portal-gun-s-weapon-glados-turret-thumbnail.png',
    required: false,
  })
  picture3: string;
}
