"use client"

import Script from "next/script"

type IubendaEmbedLinkProps = {
  href: string
  label: string
  title: string
}

/**
 * Link ufficiale iubenda (apre il documento sempre aggiornato in overlay).
 * Corrisponde allo snippet <a class="iubenda-white iubenda-noiframe iubenda-embed"> +
 * loader di https://cdn.iubenda.com/iubenda.js, qui caricato una sola volta
 * tramite next/script (id condiviso = nessun duplicato se il componente
 * compare più volte nella stessa pagina).
 */
export default function IubendaEmbedLink({ href, label, title }: IubendaEmbedLinkProps) {
  return (
    <>
      <a href={href} className="iubenda-white iubenda-noiframe iubenda-embed" title={title}>
        {label}
      </a>
      <Script id="iubenda-embed-loader" src="https://cdn.iubenda.com/iubenda.js" strategy="lazyOnload" />
    </>
  )
}
