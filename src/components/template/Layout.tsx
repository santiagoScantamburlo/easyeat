import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Footer, Header } from ".."
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCollections } from "../../features/collections/collectionsSlice"
import CollectionList from "../atom/CollectionList"

export const Layout = () => {
  const collectionState = useAppSelector((state) => state.collections)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      setCollections(
        JSON.parse(localStorage.getItem("collections")!) || JSON.parse("[]"),
      ),
    )
  }, [])

  return (
    <div>
      <Header />
      <CollectionList collections={collectionState} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
