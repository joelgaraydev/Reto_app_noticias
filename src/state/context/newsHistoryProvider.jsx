import React, { createContext } from 'react'
import { addNoticiaToUserHistory as handleAddNoticiaToUserHistory } from '../../services/firebase/addNoticiaToUserHistory'
import { db } from '../../services/firebase/firebaseConfig'
import { getNewsHistory as handleGetNewsHistory } from '../../services/firebase/getNewsHistory'

export const newsHistoryrContext = createContext()

const NewsHistoryProvider = (props) => {
  const [newsHistory, setNewsHistory] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const getNewsHistory = async ({ userEmail }) => {
    try {
      setLoading(true)
      const news = await handleGetNewsHistory({ db, userEmail })
      setLoading(false)
      setNewsHistory(news)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const addNoticiaToUserHistory = async ({
    userEmail,
    title,
    url,
    description,
    source,
    author,
    urlToImage
  }) => {
    try {
      await handleAddNoticiaToUserHistory({
        db,
        userEmail,
        title,
        url,
        description,
        source,
        author,
        urlToImage
      })
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <newsHistoryrContext.Provider
      value={{
        newsHistory,
        loading,
        getNewsHistory,
        addNoticiaToUserHistory
      }}
    >
      {props.children}
    </newsHistoryrContext.Provider>
  )
}

export default NewsHistoryProvider
