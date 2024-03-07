import { useEffect, useState } from 'react'
import * as db from '../../services/firebase'

const ProjectsPage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const storage = db.imggetStorage()

  useEffect(() => {
    const storageRef = db.imgref(storage)
    const filename = 'eldenring.png'
    const imagesRef = db.imgref(storageRef, filename)

    console.log(imagesRef)
  }, [])

  useEffect(() => {
    const storage = db.imggetStorage()
    const storageRef = db.imgref(storage)
    const filename = 'eldenring.png'
    const imagesRef = db.imgref(storageRef, filename)

    db.imggetDownloadURL(imagesRef)
      .then((url) => {
        setImageUrl(url)
      })
      .catch((error) => {
        console.error('Error getting download URL:', error)
      })
  }, [])

  return (
    <>
      <h1>projeto 1</h1>
      <p>imagem</p>
      {imageUrl && <img src={imageUrl} alt="Imagem do projeto" />}
    </>
  )
}

export default ProjectsPage
