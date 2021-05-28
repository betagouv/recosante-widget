import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { QueryClient, QueryClientProvider } from 'react-query'

import 'fonts/fonts.css'
import { GlobalStyle } from 'utils/styles'
import StyleProvider from 'components/providers/StyleProvider'
import ModalProvider from 'components/providers/ModalProvider'
import UXProvider from 'components/providers/UXProvider'
import DataProvider from 'components/providers/DataProvider'
import ElementModal from 'components/modals/ElementModal'
import Iframe from 'components/layout/Iframe'
import Widget from 'views/Widget'
import Recommandation from 'views/Recommandation'

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <QueryClientProvider client={queryClient}>
          <UXProvider>
            <StyleProvider>
              <DataProvider>
                <ModalProvider>
                  <GlobalStyle />
                  <Iframe>
                    <Switch>
                      <Route path='/recommandation'>
                        <Recommandation />
                      </Route>
                      <Route path='/:code?'>
                        <Widget />
                      </Route>
                    </Switch>
                    <ElementModal />
                  </Iframe>
                </ModalProvider>
              </DataProvider>
            </StyleProvider>
          </UXProvider>
        </QueryClientProvider>
      </QueryParamProvider>
    </Router>
  )
}

export default App
