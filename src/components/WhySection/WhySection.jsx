import React from 'react'
import './WhySection.css'

function WhySection() {
    return (
        <div className="section">
            <h2>Por que cestas orgânicas?</h2>
            <div className="section-cards">
                <div className="section-card">
                    <i className="ph ph-plant"></i>
                    <h6>Benefício Ambiental</h6>
                    <p>Redução do impacto ambiental, preservando o solo, a àgua e a biodiversidade.</p>
                </div>
                <div className="section-card">
                    <i className="ph ph-tractor"></i>
                    <h6>Produção Local</h6>
                    <p>Apoio à agricultores e produtores locais, fortalecendo a economia local.</p>
                </div>
                <div className="section-card">
                    <i className="ph ph-carrot"></i>
                    <h6>Alimentação Saudável</h6>
                    <p>Alimentos frescos e de alta qualidade, livres de agrotóxicos e fertilizantes.</p>
                </div>
            </div>
        </div>
    )
}
export default WhySection;

