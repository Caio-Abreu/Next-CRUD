interface BotaoProps {
  className?: any;
  children: any;
  onClick?: () =>void
}

export default function Botao(props: BotaoProps) {
  return (
    <button onClick={props.onClick}
      className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md ${props.className}`}
    >
      {props.children}
    </button>
  );
}
