import styles from './Educacao.module.css'

import {GiWhiteBook} from 'react-icons/gi'

function Educacao() {
    return(
        <div className={styles.EducationContainer}>
            <div className={styles.IconContainer}>
                <GiWhiteBook className={styles.icon}/>
            </div>
            <div className={styles.DescriptionContainer}>
                <p>Ao longo dos anos adquiri conhecimentos
                    valiosos e habilidades técnicas sólidas no campo de Análise e Desenvolvimento de Sistemas, bucando evolução constantemente.
                    <br/>
                    <br/>
                    Durante meu Curso, estou explorando conceitos fundamentais de programação, aprendendo diversas
                    linguagens e desenvolvendo habilidades práticas na resolução de problemas.
                    <br/>
                    Minha paixão por tecnologia e busca por conhecimento estão me impulsionando a explorar novas 
                    tendências e avanços no campo da Análise e Desenvolvimento de Sistemas. Estou sempre buscando oportunidades 
                    para aplicar o que aprendo em projetos práticos, a fim de aprimorar minhas habilidades e desenvolver minha criatividade.
                </p>
            </div>
            <div className={styles.listContainer}>
                <h3>Disciplinas já cursadas:</h3>
                <ul>
                    <li>Redes de computadores</li>
                    <li>Programação Orientada a Objetos</li>
                    <li>Desenvolvimento para Dispositivos Móveis</li>
                    <li>Engenharia, Qualidade e Teste de Software</li>
                    <li>Arquitetura de Software e Computação em Nuvem</li>
                    <li>Inteligência Artificial Aplicada Aos Negócios</li>
                </ul>
            </div>
        </div>
    )
}

export default Educacao