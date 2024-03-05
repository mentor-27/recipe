import { useState } from 'react';
import styles from './App.module.css';
import data from './data.json';

export const App = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(3);

	const prev = () => {
		setActiveIndex(prev => prev - 1);
	};

	const next = () => {
		setActiveIndex(prev => prev + 1);
	};

	const begining = () => {
		setActiveIndex(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex].content}</div>
					<ul className={styles['steps-list']}>
						{steps.map((_, i) => (
							<li
								className={`${styles['steps-item']} ${i < activeIndex ? styles.done : ''} ${i === activeIndex ? styles.active : ''}`}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(i)}
								>
									{i + 1}
								</button>
								Шаг {i + 1}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={prev} disabled={activeIndex === 0}>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={activeIndex === steps.length - 1 ? begining : next}
						>
							{activeIndex === steps.length - 1 ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
