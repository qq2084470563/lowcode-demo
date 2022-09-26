import { RouterLink, RouterView } from 'vue-router'
import { MyRouteType } from './myType'
export default (props:{routes:MyRouteType[]})=>{
  return (
    <>
    <header>
      <h2>欢迎</h2>
    </header>
    <div class='body'>
    <ul class='menu'>
					{props.routes.map((x) => {
						return (
							<li key={x.key}>
								<RouterLink to={x.path}>{x.key}</RouterLink>
							</li>
						)
					})}
				</ul>
        <div class='content'>
					<RouterView />
				</div>
    </div>
  </>
  )
  
}