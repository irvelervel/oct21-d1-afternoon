const CustomImage = (props) => (
    <div>
        {/* <img src="https://images.dog.ceo/breeds/terrier-lakeland/n02095570_2639.jpg" alt="random dog" /> */}
        {/* <img src="https://cataas.com/cat" alt="random cat" /> */}
        <img src={
            props.animal === 'cat'
                ? "https://cataas.com/cat"
                : props.animal === 'dog'
                    ? "https://images.dog.ceo/breeds/terrier-lakeland/n02095570_2639.jpg"
                    : "https://www.womansworld.com/wp-content/uploads/2019/09/bunny-photos.jpg"
        } alt={"random " + props.animal} />
    </div>
)

export default CustomImage