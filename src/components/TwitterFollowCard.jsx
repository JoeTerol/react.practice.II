import './css/TwitterFollowCard.css'

export function TwitterFollowCard({ userName, name, isFollowing }) {
    return (
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            className='tw-followCard-avatar'
            alt="el avatar boy"
            src={`https://cdn-icons-png.flaticon.com/512/3532/${userName}.png`}
          />
          <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUsername'>{userName}3532843</span>
          </div>
        </header>
        <aside>
          <button className='tw-followCard-button'>
            Seguir 
          </button>
        </aside>
      </article>
    )
  }
  