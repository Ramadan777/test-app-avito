import { useDispatch, useSelector } from 'react-redux'
import Photos from './Photos'
import { useEffect } from 'react'
import { loadPhotos } from '../redux/actions'
import Header from './Header'
import { Route } from 'react-router-dom'
import Content from './Content'
import Footer from './Footer'

function App() {
  const loading = useSelector(state => state.photos.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPhotos());
  }, [dispatch])

  if (loading) {
    return (
      <div>
        идет загрузка...
      </div>
    )
  }

  return (
    <Route path="/:id?">
    <div className="app">
      <Header />
      <Photos />
      <Content />
      <Footer />
    </div>
    </Route>
  );
}

export default App;
