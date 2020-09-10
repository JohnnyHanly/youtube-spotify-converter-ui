import Head from 'next/head'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className="header">
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <p>converter</p>
                        </a>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item">
                                Home
                                        </a>

                            <a class="navbar-item">
                                Documentation
                                        </a>

                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link">
                                    More
                                            </a>

                                <div class="navbar-dropdown">
                                    <a class="navbar-item">
                                        About
                                            </a>
                                    <a class="navbar-item">
                                        Jobs
                                            </a>
                                    <a class="navbar-item">
                                        Contact
                                            </a>
                                    <hr class="navbar-divider" />
                                    <a class="navbar-item">
                                        Report an issue
                                            </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container">
                <section className="section">

                    <h1 class="title is-1"><span style={{ color: "#1db954" }}>Spotify</span>-<span style={{ color: '#e62117' }}>Youtube</span> Converter</h1>
                    <h3 class="subtitle is-3">A simple tool to export Spotify Playlists to Youtube Music</h3>
                </section>
                <section className="section">

                    <h4 class="subtitle is-4">Get started by entering a playlist URL bellow</h4>
                    <div class="control">
                        <input class="input is-hovered input is-large" type="text" placeholder="https://open.spotify.com/playlist/37i9dQZF1DWY7IeIP1cdjF?_ga=2.124864777.2021096444.1599550730-1971544164.1584218992" />
                    </div>
                </section>
                <main>{children}</main>
                {!home && (
                    <div >
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </div>

            <footer class="footer" style={{  backgroundColor: "#e2e2e2" }}>
                <div class="content has-text-centered">
                    <p>
                        <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
                </div>
            </footer>
        </div>
    )
}