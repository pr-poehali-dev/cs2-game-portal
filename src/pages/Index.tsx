import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Match {
  id: number;
  map: string;
  mode: string;
  players: string;
  status: 'live' | 'waiting';
  skill: string;
}

interface Player {
  rank: number;
  name: string;
  elo: number;
  winrate: number;
  matches: number;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('matches');

  const mockMatches: Match[] = [
    { id: 1, map: 'Dust II', mode: '5v5', players: '8/10', status: 'waiting', skill: 'High' },
    { id: 2, map: 'Mirage', mode: '5v5', players: '10/10', status: 'live', skill: 'Medium' },
    { id: 3, map: 'Inferno', mode: '5v5', players: '6/10', status: 'waiting', skill: 'High' },
    { id: 4, map: 'Nuke', mode: '5v5', players: '10/10', status: 'live', skill: 'Low' },
  ];

  const topPlayers: Player[] = [
    { rank: 1, name: 's1mple', elo: 3245, winrate: 68, matches: 1243 },
    { rank: 2, name: 'ZywOo', elo: 3198, winrate: 65, matches: 1089 },
    { rank: 3, name: 'NiKo', elo: 3156, winrate: 64, matches: 1567 },
    { rank: 4, name: 'device', elo: 3087, winrate: 62, matches: 1834 },
    { rank: 5, name: 'electronic', elo: 3021, winrate: 61, matches: 1456 },
  ];

  const playerStats = {
    name: 'YourNick',
    elo: 2456,
    rank: 156,
    matches: 342,
    wins: 198,
    losses: 144,
    winrate: 58,
    kd: 1.34,
    hs: 45,
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-glow">
                <Icon name="Crosshair" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-heading font-bold neon-text">CS2 Arena</h1>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <Button variant="ghost" className="hover-glow">
                <Icon name="Swords" size={18} className="mr-2" />
                Матчи
              </Button>
              <Button variant="ghost" className="hover-glow">
                <Icon name="Trophy" size={18} className="mr-2" />
                Турниры
              </Button>
              <Button variant="ghost" className="hover-glow">
                <Icon name="BarChart3" size={18} className="mr-2" />
                Рейтинг
              </Button>
              <Button variant="ghost" className="hover-glow">
                <Icon name="Users" size={18} className="mr-2" />
                Команды
              </Button>
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-lg border border-primary/30">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow"></div>
                <span className="text-sm font-medium">12,847 онлайн</span>
              </div>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 neon-glow">
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-card to-accent/20 border border-primary/30 p-8 md:p-12">
          <div className="relative z-10 max-w-2xl">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30 neon-glow">
              <Icon name="Zap" size={14} className="mr-1" />
              Лучшая платформа для CS2
            </Badge>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 neon-text animate-slide-up">
              Играй на новом уровне
            </h2>
            <p className="text-lg text-muted-foreground mb-6 animate-slide-up">
              Античит система, честный рейтинг, прямые трансляции и API для разработчиков. Присоединяйся к сообществу профессионалов!
            </p>
            <div className="flex gap-4 animate-slide-up">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 neon-glow text-lg px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 hover-glow text-lg">
                <Icon name="Info" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-glow"></div>
        </section>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-card/50 border border-border/40">
            <TabsTrigger value="matches" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Icon name="Gamepad2" size={18} className="mr-2" />
              Матчи
            </TabsTrigger>
            <TabsTrigger value="rating" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Icon name="Crown" size={18} className="mr-2" />
              Рейтинг
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
              <Icon name="UserCircle" size={18} className="mr-2" />
              Мой профиль
            </TabsTrigger>
          </TabsList>

          <TabsContent value="matches" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-heading font-bold">Активные матчи</h3>
              <Button className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 neon-glow">
                <Icon name="Plus" size={18} className="mr-2" />
                Создать матч
              </Button>
            </div>
            
            <div className="grid gap-4">
              {mockMatches.map((match) => (
                <Card key={match.id} className="bg-card/50 border-border/40 hover-glow p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-primary/30">
                        <Icon name="Map" size={32} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-heading font-bold mb-1">{match.map}</h4>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Users" size={14} />
                            {match.mode}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="UserCheck" size={14} />
                            {match.players}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Badge variant={match.skill === 'High' ? 'default' : 'secondary'} className="bg-primary/20 text-primary border-primary/30">
                        {match.skill} Skill
                      </Badge>
                      {match.status === 'live' ? (
                        <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow mr-1"></div>
                          Live
                        </Badge>
                      ) : (
                        <Badge variant="outline">Ожидание</Badge>
                      )}
                      <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 neon-glow">
                        <Icon name="LogIn" size={18} className="mr-2" />
                        Присоединиться
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rating" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-heading font-bold">Топ игроков</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-primary/50">За неделю</Button>
                <Button variant="outline" size="sm" className="border-primary/50">За месяц</Button>
                <Button variant="outline" size="sm" className="border-primary/50 bg-primary/10">Всё время</Button>
              </div>
            </div>

            <Card className="bg-card/50 border-border/40">
              <div className="divide-y divide-border/40">
                {topPlayers.map((player) => (
                  <div key={player.rank} className="p-4 hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-heading font-bold text-lg ${
                          player.rank === 1 ? 'bg-gradient-to-br from-yellow-500 to-orange-500 neon-glow' :
                          player.rank === 2 ? 'bg-gradient-to-br from-gray-300 to-gray-500' :
                          player.rank === 3 ? 'bg-gradient-to-br from-amber-600 to-amber-800' :
                          'bg-gradient-to-br from-primary/20 to-accent/20'
                        }`}>
                          #{player.rank}
                        </div>
                        <Avatar className="w-12 h-12 border-2 border-primary/30">
                          <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-bold">
                            {player.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-heading font-bold text-lg">{player.name}</h4>
                          <p className="text-sm text-muted-foreground">{player.matches} матчей</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-2xl font-heading font-bold text-primary">{player.elo}</p>
                          <p className="text-xs text-muted-foreground">ELO</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-secondary">{player.winrate}%</p>
                          <p className="text-xs text-muted-foreground">Побед</p>
                        </div>
                        <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary/10">
                          <Icon name="Eye" size={16} className="mr-2" />
                          Профиль
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-primary/20 via-card to-accent/20 border-primary/30 p-6 col-span-1">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 border-4 border-primary/50 mb-4 neon-glow">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white text-2xl font-bold">
                      YN
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-2xl font-heading font-bold mb-1">{playerStats.name}</h3>
                  <p className="text-muted-foreground mb-4">Рейтинг: #{playerStats.rank}</p>
                  <div className="w-full space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>ELO</span>
                      <span className="font-bold text-primary">{playerStats.elo}</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 neon-glow">
                    <Icon name="Settings" size={18} className="mr-2" />
                    Настройки
                  </Button>
                </div>
              </Card>

              <Card className="bg-card/50 border-border/40 p-6 col-span-2">
                <h4 className="text-xl font-heading font-bold mb-4">Статистика</h4>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Всего матчей</span>
                      <Icon name="Gamepad2" size={18} className="text-primary" />
                    </div>
                    <p className="text-3xl font-heading font-bold">{playerStats.matches}</p>
                  </div>

                  <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Процент побед</span>
                      <Icon name="TrendingUp" size={18} className="text-secondary" />
                    </div>
                    <p className="text-3xl font-heading font-bold text-secondary">{playerStats.winrate}%</p>
                  </div>

                  <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">K/D Ratio</span>
                      <Icon name="Target" size={18} className="text-accent" />
                    </div>
                    <p className="text-3xl font-heading font-bold text-accent">{playerStats.kd}</p>
                  </div>

                  <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Headshot %</span>
                      <Icon name="Crosshair" size={18} className="text-primary" />
                    </div>
                    <p className="text-3xl font-heading font-bold">{playerStats.hs}%</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Победы</span>
                      <span className="font-bold text-secondary">{playerStats.wins} ({playerStats.winrate}%)</span>
                    </div>
                    <Progress value={playerStats.winrate} className="h-2 [&>div]:bg-secondary" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Поражения</span>
                      <span className="font-bold text-destructive">{playerStats.losses} ({100 - playerStats.winrate}%)</span>
                    </div>
                    <Progress value={100 - playerStats.winrate} className="h-2 [&>div]:bg-destructive" />
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-card/50 border-border/40 p-6">
              <h4 className="text-xl font-heading font-bold mb-4">Недавние матчи</h4>
              <div className="space-y-3">
                {[
                  { map: 'Dust II', result: 'win', score: '16:12', kd: 1.5, date: '2 часа назад' },
                  { map: 'Mirage', result: 'loss', score: '12:16', kd: 0.9, date: '5 часов назад' },
                  { map: 'Inferno', result: 'win', score: '16:8', kd: 1.8, date: 'Вчера' },
                ].map((match, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded flex items-center justify-center ${
                        match.result === 'win' ? 'bg-secondary/20 text-secondary' : 'bg-destructive/20 text-destructive'
                      }`}>
                        <Icon name={match.result === 'win' ? 'Check' : 'X'} size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">{match.map}</p>
                        <p className="text-sm text-muted-foreground">{match.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="font-bold">{match.score}</p>
                        <p className="text-sm text-muted-foreground">Счёт</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary">{match.kd}</p>
                        <p className="text-sm text-muted-foreground">K/D</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-glow">
                  <Icon name="Crosshair" size={18} className="text-white" />
                </div>
                <h3 className="font-heading font-bold">CS2 Arena</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональная платформа для киберспорта CS2
              </p>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-3">Игра</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Матчи</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Турниры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Команды</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-3">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold mb-3">Разработчикам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2024 CS2 Arena. Все права защищены.</p>
            <div className="flex items-center gap-4">
              <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                <Icon name="Shield" size={14} className="mr-1" />
                Античит включен
              </Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">
                <Icon name="Zap" size={14} className="mr-1" />
                128 tick серверы
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
