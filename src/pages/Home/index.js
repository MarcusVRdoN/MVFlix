import React from 'react'
import data from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault'

function Home() {
  return (
    <PageDefault style={{ backgroundColor: '#141414', margin: '-50px -5%' }}>
      <BannerMain
        videoTitle={data.categorias[0].videos[0].titulo}
        url={data.categorias[0].videos[0].url}
        videoDescription={'O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que esles fazem, afinal? Desvubra com a Vanessa'}
      />
      {
        data.categorias.map((categoria, index) => {
          return <Carousel
            ignoreFirstVideo
            category={categoria}
            key={index}
          />
        })
      }
    </PageDefault>
  )
}

export default Home
