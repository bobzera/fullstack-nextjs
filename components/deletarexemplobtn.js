import Link from 'next/link'

const links = [
   { href: '/', label: 'Voltar' },
   { href: '/', label: 'Voltar' , color: 'no-underline btn-blue' },
   { href: '/', label: 'Voltar', color: 'no-underline btn-blue' },
]


export default function Nav() {
     return (
   
          <ul className="flex items-center justify-between space-x-4">
            {links.map(({ href, label,color }) => (
              <li>
                <a href={href} className={color}>
                  {label}
                </a>
              </li>
            ))}
          </ul>    

    )
  }
  