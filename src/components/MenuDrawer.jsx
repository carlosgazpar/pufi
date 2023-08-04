'use client';
import MenuDrawerItem from '@/common/MenuDrawerItem'
import '@/styles/components/MenuDrawer.scss'
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { triggerDisplay } from '@/redux/features/menuSlice';

const MenuDrawer = () => {

  const display = useAppSelector((state) => state.menuReducer.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={`menu-overlay ${display && "menu-overlay-show"}`} onClick={() => dispatch(triggerDisplay())} ></div>
      
      <div className={`menu-drawer ${display && "menu-drawer-show"}`}>

        <div className="close-icon">
          <span onClick={() => dispatch(triggerDisplay())}>&#x2715;</span>
        </div>

        <MenuDrawerItem
          setIsVisible={()=>{}}
          title="Pufi PUFF"
          id="introduce"
          img="/assets/img/icon-pufi-puff.png"
        />
        <MenuDrawerItem
          setIsVisible={()=>{}}
          id="about"
          img="/assets/img/umbrella-outline.svg"
          title='Pufi RAIN'
        />
        <MenuDrawerItem
          setIsVisible={()=>{}}
          id="resume"
          img="/assets/img/icon-pufi-cart.svg"
          title='Pufi CART'
        />
        <MenuDrawerItem
          setIsVisible={()=>{}}
          id="myskills"
          img="/assets/img/icon-pufi-nap.png"
          title='Pufi NAP'
        />
      </div>
    </>
  )
}

export default MenuDrawer