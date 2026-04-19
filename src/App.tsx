import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Layero sample — React + Vite</h1>
          <p className="subtitle">
            Демо-страница для проверки деплоя: сборка даёт каталог{' '}
            <code>dist/</code>, его и забирает Layero.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Локальный счётчик: {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section className="demo-body" aria-labelledby="demo-heading">
        <h2 id="demo-heading">Как это связано с Layero</h2>
        <p className="lead">
          Layero клонирует репозиторий, ставит зависимости, выполняет команду
          сборки и публикует статику в Object Storage за CDN. Этот репозиторий —
          минимальный пример: React, Vite, выход в <code>dist/</code>.
        </p>
        <ol className="pipeline">
          <li>
            <strong>Push в GitHub</strong> — срабатывает webhook, стартует
            билдер.
          </li>
          <li>
            <strong>Сборка</strong> — например <code>npm run build</code>,
            артефакты в <code>dist/</code>.
          </li>
          <li>
            <strong>Выдача</strong> — сайт открывается по URL вида{' '}
            <code>*.layero.ru</code> или по своему домену.
          </li>
        </ol>

        <div className="feature-grid">
          <article className="card">
            <h3 className="card-title">Статический выход</h3>
            <p>
              HTML, JS и ассеты из <code>dist/</code> без сервера приложения —
              идеально для SPA на Vite.
            </p>
          </article>
          <article className="card">
            <h3 className="card-title">Логи и переменные</h3>
            <p>
              В интерфейсе Layero видно ход сборки; при необходимости можно
              задать env для <code>vite build</code>.
            </p>
          </article>
          <article className="card">
            <h3 className="card-title">Окружения</h3>
            <p>
              Разные ветки и ручные деплои помогают отделить превью от
              продакшена.
            </p>
          </article>
        </div>

        <p className="build-hint">
          Команда по умолчанию: <code>npm run build</code> → каталог{' '}
          <code>dist</code>.
        </p>
      </section>

      <footer className="site-footer">
        Layero · тестовый сайт · React + Vite
      </footer>
    </>
  )
}

export default App
