import Padrao, { Comp1 as BlaBla, Comp2, Comp4, Comp5, Comp6} from "../../components/modulo/funcionais"

export default function teste() {
    return (
        <div>
            <BlaBla />
            <Comp2 />
            <Padrao />
            <Comp4 />
            <Comp5 />
            <Comp6 msg="Legal!!!" />
        </div>
    )
}