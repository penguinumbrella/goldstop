import './productsView.css'

const ProductsView = () => {
  const inmain = true;
  return (
    <div className='productsView'>
      {inmain ? (
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