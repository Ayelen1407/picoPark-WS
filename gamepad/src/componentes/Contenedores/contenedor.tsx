export default function Contenedor({ children }: { children: React.ReactNode }) {
  return (
    <div className="contenedor-principal">
      {children}
    </div>
  );
}