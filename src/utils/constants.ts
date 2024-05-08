import { BookMarked, Compass, Search, Settings, Shield } from 'lucide-react'

export const TECH_SERVICES = [
  'Gestão técnica de Programas Setoriais da Qualidade',
  'Avaliação de produtos inovadores para construção civil',
  'Realização de ensaios de materiais de construção',
]

export const OBJECTIVES = [
  'Prover suporte para a avaliação de novos produtos e tecnologias',
  'Reduzir riscos na utilização de novos produtos e tecnologias',
  'Orientar o mercado na escolha de novos produtos e tecnologias',
  'Estimular o processo de inovação tecnológica',
  'Buscar a concessão de uma aprovação técnica, com base em um documento de avaliação técnica',
]

export const ADDRESSES = [
  {
    label: 'Telefone:',
    contact: '(11) 2137-9666',
  },
  {
    label: 'Endereço:',
    contact: 'Rua Guaipá, 486, Vila Leopoldina São Paulo, CEP 05089-000',
  },
]

export const OBJECTIVES_V2 = [
  {
    title: 'Suporte a Avaliação',
    description:
      'Prover suporte para a avaliação de novos produtos e tecnologias',
    icon: Search,
  },
  {
    title: 'Redução de Riscos',
    description: 'Reduzir riscos na utilização de novos produtos e tecnologias',
    icon: Shield,
  },
  {
    title: 'Orientação de Mercado',
    description:
      'Orientar o mercado na escolha de novos produtos e tecnologias',
    icon: Compass,
  },
  {
    title: 'Inovação Tecnológica',
    description: 'Estimular o processo de inovação tecnológica',
    icon: Settings,
  },
  {
    title: 'Concessão Técnica',
    description:
      'Buscar a concessão de uma aprovação técnica, com base em um documento de avaliação técnica',
    icon: BookMarked,
  },
]
