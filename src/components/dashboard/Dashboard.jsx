import { useFecth } from '../../network/useFecth.jsx';

export const Dashboard = () => {
	const { items } = useFecth('item/all?type=Componente Electronico');

	return (
		<>
			<div>
				{items.map(item => (
					<li key={item.name}>
						<img src={item.img_item} alt={item.name} />
						<h2>{item.name}</h2>
						<p>{item.Type_item.name_type}</p>
					</li>
				))}
			</div>
		</>
	);
};
