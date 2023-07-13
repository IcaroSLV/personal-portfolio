import styles from './Educacao.module.css'

import {GiWhiteBook} from 'react-icons/gi'

function Educacao() {
    return(
        <div className={styles.EducationContainer}>
            <div className={styles.IconContainer}>
                <GiWhiteBook className={styles.icon}/>
            </div>
            <div className={styles.DescriptionContainer}>
                <p>Continuo Cursando Análise e Desenvolvimento de sistemas. Ao longo dos anos adquiri conhecimentos
                    valiosos e habilidades técnicas sólidas nesse campo em constante evolução.
                    <br/>
                    <br/>
                    Durante meu Curso, estou explorando conceitos fundamentais de programação, aprendendo diversas
                    linguagem e desenvolvendo habilidades práticas de resolução de problemas.
                    <br/>
                    Minha paixão por tecnologia e minha busca por conhecimento estão me impulsionando a explorar novas 
                    tendências e avanços no campo da Análise e Desenvolvimento de Sistemas. Estou sempre buscando oportunidades 
                    para aplicar o que aprendo em projetos práticos, a fim de aprimorar minhas habilidades e desenvolver minha criatividade.
                </p>
            </div>
            <div className={styles.listContainer}>
                <h3>Disciplinas ja cursadas:</h3>
                <ul>
                    <li>Programação Orientada a objetos</li>
                    <li>Redes de computadores</li>
                    <li>Desenvolvimento para dispositivos moveis</li>
                    <li>Engenharia, Qualidade e Teste de software</li>
                    <li>Arquitetura de Software e Computação em Nuvem</li>
                    <li>Inteligência Artificial Aplicada Aos Negócios</li>
                </ul>
            </div>
        </div>
    )
}

export default Educacao