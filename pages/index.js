import Head from 'next/head'
import Header from '../components/header/Header'
import Wedo from '../components/wedo/Wedo'
import Works from '../components/works/Works'
import Team from '../components/team/Team'

import './styles.scss'

export default function Home() {
  return (
    <div className="container-fluid main__container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/flatly/bootstrap.min.css" rel="stylesheet" integrity="sha384-mhpbKVUOPCSocLzx2ElRISIORFRwr1ZbO9bAlowgM5kO7hnpRBe+brVj8NNPUiFs" crossorigin="anonymous"/>                </Head>

      <main>
        <Header />
        <Wedo />
        <Works />
        <Team />

      </main>

      <footer>
        <p className="text-center">Invisible Objects 2020</p>
      </footer>
    </div>
  )
}
