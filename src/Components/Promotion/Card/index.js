import React from 'react';
import './styles.css';

const PromotionCard = ({ promotion }) => {

    function handleCurrencyLocal(price){
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return(
        <div className="promotion-card">
            <img src={promotion.imageUrl} alt={promotion.title} className="promotion-card__image"/>

            <div className="promotion-card__info">
                <h1 className="promotion-card__title">{promotion.title}</h1>
                <span className="promotion-card__price">{handleCurrencyLocal(promotion.price)}</span>
                <footer className="promotion-card__footer">
                    {promotion.comments.length > 0 && (
                        <div className="promotion-card__comment">
                            "{promotion.comments[0].comment}"
                        </div>
                    )}

                    <div className="promotion-card__comments-count">
                        {promotion.comments.length} {promotion.comments.length <= 1 ? 'comentário' : 'comentários'}
                    </div>

                    <a href={promotion.url} target="_blank" rel="noreferrer" className="promotion-card__link">IR PARA O SITE</a>
                </footer>
            </div>
        </div>
    )
}

export default PromotionCard;