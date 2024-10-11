import { Link } from 'react-router-dom'

import NotFoundPie from '../assets/undraw_pie_chart_re_bgs8.svg'

export function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center gap-10">
      <img src={NotFoundPie} alt="imagem Página não encontrada" width={392} />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">Página não encontrada</h1>
        <p className="text-accent-foreground">
          Voltar para o{' '}
          <Link to="/" className="text-rose-500 dark:text-rose-400">
            Dashboard
          </Link>
        </p>
      </div>
    </div>
  )
}
