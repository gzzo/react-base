import React from 'react'

type PageProps = {
  children: React.ReactNode
}

export default function Page({ children }: PageProps): React.ReactElement {
  return <div>{children}</div>
}
