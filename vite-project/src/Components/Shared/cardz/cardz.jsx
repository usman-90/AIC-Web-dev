import "./cardz.scss";

export const Cardz = ({children,cardClass}) => {
  return (
    <div className={`cardz ${cardClass}`}>{children}</div>
  )
};
