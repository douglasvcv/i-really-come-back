import styles from './Content.module.css'

function Content(){
    return(
        <>
        <div className={styles.container_content}>

        <div className="left_content">
        <h2>Inscreva-se na Para Notícias</h2>
        <input type="text" placeholder="Digite seu email"/>
        <button>Inscreva-se</button>
        </div>
        <aside className="right_content">
            <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
        Lorem ipsum dolor sit amet. Quo error vero quo quasi optio ut vitae quos sit impedit voluptates aut natus omnis et nihil cupiditate et nostrum voluptatem. At eligendi voluptas sit quas natus qui voluptatum mollitia.

Et saepe amet eos nihil nisi non itaque enim ut libero doloremque. Qui quia beatae eos ratione assumenda sed modi aspernatur quo minus totam. Et laborum corrupti eos incidunt molestiae aut illum consequatur eum delectus corrupti et voluptatem molestiae.

Non quasi nihil eum ullam esse est veritatis dolorem aut galisum natus. Est atque maiores ex cumque quis non sint facilis ex quidem consequatur ut laboriosam voluptatem. Quo voluptatem earum aut dolore expedita non itaque voluptatem At voluptatum nihil.
        </p>
        </aside>
        </div>
        </>
    )
}

export default Content