import React, { lazy, Suspense } from "react"

const LazyApplicationMode = lazy(() => import("./components/ApplicationMode"))

const App = () => {
  return <div className="container"><Suspense fallback={<h6>Loading...</h6>}><LazyApplicationMode /></Suspense></div>
}

export default App;