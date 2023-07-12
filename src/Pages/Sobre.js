import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'

import styles from './Sobre.module.css'

function Sobre() {

    const [dataAPI, setDataAPI] = useState()

    useEffect(() => {
        fetch(`https://api.github.com/users/IcaroSLV`)
        .then(resp => resp.json())
        .then(data => setDataAPI(data))
        .catch(err => console.log(err))
    })



    return(
        <div className={styles.AboutContainer}>
            <div className={styles.Container}>
                <div className={styles.ImgContainer}>
                    <img src={dataAPI && dataAPI.avatar_url}></img>
                </div>
                <div className={styles.DescriptionContainer}>
                    <p>
                        Começei a estudar Javascript há mais de 1 ano e começei a me apaixonar mais e mais por Front-End,
                        então começei a estudar React e criar muitos projetos para aprimorar mais minhas habilidades.
                        Tenho paixão por resolver problemas complexos e colaborar em equipe. 
                        Convido você a <span><Link to={'/projetos'}>explorar meu portfólio</Link></span> para conhecer alguns dos meus projetos e habilidades técnicas. 
                        Estou animado com as oportunidades que o futuro reserva no campo da programação e desenvolvimento de sistemas.
                        <br/>
                        <br/>
                        Atualmente <span><Link to={"/educacao"}>cursando Analise e Desenvolvimento de Sistema.</Link></span> Meu interesse pela tecnologia e programação começou cedo
                        e me motivou a focar meus estudos no desenvolvimento Front-End.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sobre