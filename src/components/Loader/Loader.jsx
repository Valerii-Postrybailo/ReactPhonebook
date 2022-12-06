import { Oval } from  'react-loader-spinner'

export default function Loader () {
  return(
    <div 
      style={{display: "flex",
        justifyContent: "center",
        margin: "10px 0px"
        }}
      >
      <Oval
        height={30}
        width={30}
        color="crimson"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="coral-pink"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
    
  )
}