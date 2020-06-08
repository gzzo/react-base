import React from 'react'

import css from './index.scss'

type PageProps = {
  children: React.ReactNode
}

export default function Page({ children }: PageProps): React.ReactElement {
  return <div className={css.page}>{children}</div>
}
