import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  Collection,
  CollectionSlice,
  addCollection,
  addFoodToCollection,
} from "../../features/collections/collectionsSlice"

const CollectionList = ({ collections }: { collections: CollectionSlice }) => {
  const [nuevaComida, setNuevaComida] = useState("")
  const [coleccion, setColeccion] = useState("")
  const [nuevaColeccion, setNuevaColeccion] = useState<Collection>({
    name: "",
    foods: [],
  })
  const collectionState = useAppSelector((state) => state.collections)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Collection List</h1>
      <ul>
        {collections.collections.map((collection, index) => (
          <>
            <li key={collection.name + index}>{collection.name}</li>
            <ul>
              Comidas
              {collection.foods.map((food, index) => (
                <li key={"food" + collection.name + index}>{food}</li>
              ))}
            </ul>
          </>
        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (nuevaColeccion.name === "") return
          dispatch(addCollection(nuevaColeccion))
          setNuevaColeccion({ name: "", foods: [] })
        }}
      >
        <label htmlFor="nueva-coleccion">Nueva coleccion</label>
        <input
          id="nueva-coleccion"
          value={nuevaColeccion.name}
          onChange={(e) =>
            setNuevaColeccion({
              ...nuevaColeccion,
              name: e.currentTarget.value,
            })
          }
          type="text"
        />
        <button type="submit">Cargar</button>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (nuevaComida === "" || coleccion === "") return
          dispatch(
            addFoodToCollection({
              collectionName: coleccion,
              foodName: nuevaComida,
            }),
          )
          setNuevaColeccion({ name: "", foods: [] })
        }}
      >
        <label htmlFor="coleccion">Coleccion</label>
        <select
          id="coleccion"
          value={coleccion}
          onChange={(e) => setColeccion(e.currentTarget.value)}
        >
          {collections.collections.map((collection, index) => (
            <option
              key={"food" + collection.name + index}
              value={collection.name}
            >
              {collection.name}
            </option>
          ))}
        </select>
        <label htmlFor="nueva-comida">Nueva comida</label>
        <input
          id="nueva-comida"
          value={nuevaComida}
          onChange={(e) => setNuevaComida(e.currentTarget.value)}
          type="text"
        />
        <button type="submit">Cargar</button>
      </form>
    </div>
  )
}

export default CollectionList
