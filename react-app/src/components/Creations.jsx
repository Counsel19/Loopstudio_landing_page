const Creations = ({ cards }) => {
	return (
		<section className="creation-mobile">
			<h2>Our Creations</h2>
			<section>
				{cards.map((card) => {
					const { id, image, alt, title } = card;
					return (
						<article key={id}>
							<div>
								<img src={image} alt={alt} />
							</div>
							<h3>{title}</h3>
						</article>
					);
				})}
            </section>
            <div className='btn-container'>
                <button className='btn'>See All</button>
            </div>
		</section>
	);
};

export default Creations;
