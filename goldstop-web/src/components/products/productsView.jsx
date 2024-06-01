import './productsView.css'

const ProductsView = () => {
  const indev = false;
  return (
    <div className='productsView'>
      {indev === "false" ? (
        <h2>Coming soon!</h2>
      ) : (
        <>
        ProductsView
        </>
    )}
    </div>
  )
}

export default ProductsView