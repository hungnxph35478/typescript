// import React from 'react';
import { TProduct } from '~/interface/Product';
// import style from './ProductItem.module.scss';

type Props = {
	product: TProduct | null;
	viewMode: string;
};

const ProductItem = (props: Props) => {
	const viewMode = props.viewMode;
	return (
		<div>
			<h2>{props.product?.title}</h2>
			<img
				width={viewMode === 'full' ? 300 : 160}
				src={props.product?.thumbnail}
				alt={props.product?.title}
			/>
			<div>Gia san pham: {props.product?.price}</div>
		</div>
	);
};

export default ProductItem;