import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeQuest, setActiveQuest] = useState<number | null>(null);
  const [solvedRiddles, setSolvedRiddles] = useState<number[]>([]);
  const [userProgress, setUserProgress] = useState(35);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const quests = [
    {
      id: 1,
      title: "Солнечное приключение",
      description: "Узнай, почему светит солнце и греет землю",
      icon: "☀️",
      color: "from-yellow-400 to-orange-400",
      difficulty: "Легко",
      reward: 100,
      weatherFact: "Солнце — звезда, которая даёт свет и тепло. Температура на поверхности солнца около 5500°C!"
    },
    {
      id: 2,
      title: "Тайна облаков",
      description: "Открой секрет пушистых облачков на небе",
      icon: "☁️",
      color: "from-blue-300 to-cyan-300",
      difficulty: "Средне",
      reward: 150,
      weatherFact: "Облака состоят из миллионов крошечных капелек воды или кристалликов льда. Они плывут по небу, потому что их несёт ветер!"
    },
    {
      id: 3,
      title: "Радужный мост",
      description: "Как появляется волшебная радуга после дождя",
      icon: "🌈",
      color: "from-pink-400 via-purple-400 to-blue-400",
      difficulty: "Сложно",
      reward: 200,
      weatherFact: "Радуга появляется, когда солнечный свет проходит через капельки дождя и разделяется на 7 цветов: красный, оранжевый, жёлтый, зелёный, голубой, синий, фиолетовый!"
    },
    {
      id: 4,
      title: "Приключение дождя",
      description: "Откуда берутся капельки дождя",
      icon: "🌧️",
      color: "from-blue-400 to-indigo-400",
      difficulty: "Легко",
      reward: 100,
      weatherFact: "Дождь — это вода из облаков! Когда капельки в облаке становятся тяжёлыми, они падают на землю. Это называется круговорот воды в природе."
    },
    {
      id: 5,
      title: "Снежная сказка",
      description: "Почему зимой идёт снег, а не дождь",
      icon: "❄️",
      color: "from-cyan-300 to-blue-200",
      difficulty: "Средне",
      reward: 150,
      weatherFact: "Снежинки образуются, когда вода в облаках замерзает при холодной погоде. Каждая снежинка уникальна и имеет 6 лучиков!"
    },
    {
      id: 6,
      title: "Танец ветра",
      description: "Узнай, откуда берётся ветер",
      icon: "🌪️",
      color: "from-gray-300 to-slate-400",
      difficulty: "Сложно",
      reward: 200,
      weatherFact: "Ветер — это движение воздуха! Тёплый воздух поднимается вверх, а холодный занимает его место. Это движение мы чувствуем как ветер."
    }
  ];

  const riddles = [
    {
      id: 1,
      question: "Без крыльев летят, без ног бегут, без паруса плывут",
      options: ["Облака", "Птицы", "Самолёты", "Листья"],
      answer: "Облака",
      hint: "Они белые и пушистые на небе",
      explanation: "Облака состоят из капелек воды и перемещаются по небу благодаря ветру! Они не имеют крыльев, ног или парусов."
    },
    {
      id: 2,
      question: "Меня никто не видит, но всякий слышит, а спутницу мою всяк может видеть, но никто не слышит",
      options: ["Гром и молния", "Ветер и дождь", "День и ночь", "Снег и лёд"],
      answer: "Гром и молния",
      hint: "Это бывает во время грозы",
      explanation: "Гром — это звук, молния — это свет! Во время грозы сначала мы видим молнию, а потом слышим гром."
    },
    {
      id: 3,
      question: "Пушистая вата плывёт куда-то. Чем вата ниже, тем дождикближе",
      options: ["Снег", "Облако", "Туман", "Дым"],
      answer: "Облако",
      hint: "Высоко в небе белое и лёгкое",
      explanation: "Тёмные низкие облака несут дождь! Чем ниже облако опускается к земле, тем скорее начнётся дождь."
    },
    {
      id: 4,
      question: "Крупно, дробно зачастил и всю землю напоил",
      options: ["Дождь", "Снег", "Град", "Роса"],
      answer: "Дождь",
      hint: "Капает с неба и создаёт лужи",
      explanation: "Дождь поливает землю водой! Это очень важно для растений, животных и людей."
    },
    {
      id: 5,
      question: "Не огонь, а больно жжёт. Не фонарь, а ярко светит",
      options: ["Солнце", "Лампа", "Костёр", "Луна"],
      answer: "Солнце",
      hint: "Оно светит днём на небе",
      explanation: "Солнце — это огромная звезда! Оно даёт нам свет и тепло, но долго смотреть на него нельзя — можно повредить глаза."
    },
    {
      id: 6,
      question: "Вот по небу мчится конь — из-под ног летит огонь. Конь копытом бьёт могучим и раскалывает тучи",
      options: ["Молния", "Ракета", "Комета", "Самолёт"],
      answer: "Молния",
      hint: "Яркая вспышка во время грозы",
      explanation: "Молния — это мощный электрический разряд! Она образуется в грозовых облаках и может достигать температуры 30000°C."
    },
    {
      id: 7,
      question: "Белый, а не сахар. Мягкий, а не вата. Без ног, а идёт",
      options: ["Снег", "Облако", "Туман", "Пух"],
      answer: "Снег",
      hint: "Падает зимой с неба",
      explanation: "Снег — это замёрзшая вода! Снежинки образуются в холодных облаках и медленно падают на землю."
    },
    {
      id: 8,
      question: "Раскалённая стрела дуб свалила у села",
      options: ["Молния", "Метеор", "Ураган", "Торнадо"],
      answer: "Молния",
      hint: "Яркая и опасная во время грозы",
      explanation: "Молния очень мощная! Она может попасть в дерево и расколоть его. Во время грозы нужно прятаться в безопасном месте."
    }
  ];

  const characters = [
    { 
      name: "Солнышко", 
      emoji: "☀️", 
      unlocked: true,
      description: "Весёлая звёздочка, которая освещает и согревает нашу планету"
    },
    { 
      name: "Облачко", 
      emoji: "☁️", 
      unlocked: true,
      description: "Пушистый путешественник неба, который несёт дождь и снег"
    },
    { 
      name: "Капелька", 
      emoji: "💧", 
      unlocked: false,
      description: "Маленькая героиня круговорота воды в природе"
    },
    { 
      name: "Радуга", 
      emoji: "🌈", 
      unlocked: false,
      description: "Разноцветный мост между дождём и солнцем"
    },
    { 
      name: "Снежинка", 
      emoji: "❄️", 
      unlocked: false,
      description: "Ледяная красавица с уникальным узором из шести лучиков"
    },
    { 
      name: "Ветерок", 
      emoji: "🌪️", 
      unlocked: false,
      description: "Невидимый танцор, который гоняет облака по небу"
    },
    { 
      name: "Молния", 
      emoji: "⚡", 
      unlocked: false,
      description: "Электрическая вспышка, которая освещает небо во время грозы"
    },
    { 
      name: "Гром", 
      emoji: "🔊", 
      unlocked: false,
      description: "Громкий голос неба, который следует за молнией"
    }
  ];

  const achievements = [
    { 
      title: "Первый шаг", 
      description: "Начал первый квест о погоде", 
      earned: true,
      icon: "🎯",
      reward: 50
    },
    { 
      title: "Знаток загадок", 
      description: "Разгадал 5 загадок про погоду", 
      earned: true,
      icon: "🧩",
      reward: 100
    },
    { 
      title: "Исследователь", 
      description: "Прошёл 3 обучающих урока", 
      earned: false,
      icon: "📚",
      reward: 150
    },
    { 
      title: "Коллекционер", 
      description: "Собрал всех погодных персонажей", 
      earned: false,
      icon: "🎭",
      reward: 200
    },
    { 
      title: "Мастер погоды", 
      description: "Завершил все квесты на 100%", 
      earned: false,
      icon: "👑",
      reward: 500
    },
    { 
      title: "Гений метеорологии", 
      description: "Разгадал все 8 загадок без ошибок", 
      earned: false,
      icon: "🧠",
      reward: 300
    }
  ];

  const lessons = [
    {
      title: "Откуда берётся дождь?",
      description: "Узнай про круговорот воды в природе — как вода путешествует с земли в небо и обратно",
      duration: "5 мин",
      icon: "🌧️",
      topics: ["Испарение", "Конденсация", "Осадки", "Круговорот воды"]
    },
    {
      title: "Почему дует ветер?",
      description: "Раскрой тайну движения воздуха — как тёплый и холодный воздух создают ветер",
      duration: "7 мин",
      icon: "🌬️",
      topics: ["Тёплый воздух", "Холодный воздух", "Атмосферное давление", "Движение воздуха"]
    },
    {
      title: "Как появляется радуга?",
      description: "Волшебство света и капелек — узнай про преломление света в дождевых каплях",
      duration: "6 мин",
      icon: "🌈",
      topics: ["Солнечный свет", "Капли дождя", "Преломление", "7 цветов радуги"]
    },
    {
      title: "Что такое гроза?",
      description: "Разгадай тайну молнии и грома — откуда берётся электричество в облаках",
      duration: "8 мин",
      icon: "⛈️",
      topics: ["Грозовые облака", "Молния", "Гром", "Безопасность при грозе"]
    },
    {
      title: "Почему идёт снег?",
      description: "Узнай про образование снежинок и почему зимой холодно",
      duration: "6 мин",
      icon: "❄️",
      topics: ["Температура", "Замерзание воды", "Снежинки", "Зима"]
    },
    {
      title: "Времена года",
      description: "Почему сменяются весна, лето, осень и зима — секрет наклона Земли",
      duration: "10 мин",
      icon: "🌍",
      topics: ["Орбита Земли", "Наклон оси", "Солнечный свет", "Климат"]
    },
    {
      title: "Что такое туман?",
      description: "Разберись, как образуется туман и чем он отличается от облаков",
      duration: "4 мин",
      icon: "🌫️",
      topics: ["Водяной пар", "Охлаждение", "Конденсация", "Видимость"]
    },
    {
      title: "Солнце и тепло",
      description: "Узнай, как солнце согревает Землю и почему днём теплее, чем ночью",
      duration: "5 мин",
      icon: "☀️",
      topics: ["Солнечные лучи", "Нагревание", "День и ночь", "Температура"]
    }
  ];

  const handleRiddleAnswer = (riddleId: number, answer: string, correctAnswer: string) => {
    setSelectedAnswer(answer);
    if (answer === correctAnswer && !solvedRiddles.includes(riddleId)) {
      setTimeout(() => {
        setSolvedRiddles([...solvedRiddles, riddleId]);
        setUserProgress(prev => Math.min(prev + 10, 100));
        setSelectedAnswer(null);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-6xl animate-bounce-slow">🌤️</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              Манечкоды
            </h1>
          </div>
          <p className="text-xl text-white/90 drop-shadow">
            Исследуй мир погоды через квесты и загадки!
          </p>
        </header>

        <Card className="bg-white/95 backdrop-blur-sm p-4 mb-6 border-4 border-white shadow-2xl">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-purple-700">Твой прогресс</span>
            <span className="text-2xl font-bold text-purple-700">{userProgress}%</span>
          </div>
          <Progress value={userProgress} className="h-3" />
          <div className="flex gap-2 mt-3">
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
              <Icon name="Star" size={14} className="mr-1" />
              {solvedRiddles.length * 50} очков
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300">
              <Icon name="Trophy" size={14} className="mr-1" />
              {achievements.filter(a => a.earned).length} достижений
            </Badge>
          </div>
        </Card>

        <Tabs defaultValue="quests" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-6 bg-white/90 backdrop-blur-sm p-1 rounded-2xl shadow-lg">
            <TabsTrigger value="quests" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="Map" size={18} className="mr-2" />
              <span className="hidden md:inline">Квесты</span>
            </TabsTrigger>
            <TabsTrigger value="riddles" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="HelpCircle" size={18} className="mr-2" />
              <span className="hidden md:inline">Загадки</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="TrendingUp" size={18} className="mr-2" />
              <span className="hidden md:inline">Прогресс</span>
            </TabsTrigger>
            <TabsTrigger value="characters" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="Users" size={18} className="mr-2" />
              <span className="hidden md:inline">Герои</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="Award" size={18} className="mr-2" />
              <span className="hidden md:inline">Награды</span>
            </TabsTrigger>
            <TabsTrigger value="lessons" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="BookOpen" size={18} className="mr-2" />
              <span className="hidden md:inline">Уроки</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quests" className="space-y-4">
            {quests.map((quest, index) => (
              <Card
                key={quest.id}
                className="overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition-transform cursor-pointer bg-white/95 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-r ${quest.color} p-6 text-white`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-6xl animate-float">{quest.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{quest.title}</h3>
                        <p className="text-white/90">{quest.description}</p>
                      </div>
                    </div>
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/40">
                      {quest.difficulty}
                    </Badge>
                  </div>
                  <div className="mt-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-3">
                      <p className="text-sm text-white/95 leading-relaxed">
                        💡 {quest.weatherFact}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon name="Coins" size={20} />
                        <span className="font-bold">+{quest.reward} очков</span>
                      </div>
                      <Button
                        onClick={() => setActiveQuest(quest.id)}
                        className="bg-white text-purple-700 hover:bg-white/90 font-bold shadow-lg"
                      >
                        Начать квест
                        <Icon name="ArrowRight" size={18} className="ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="riddles" className="space-y-4">
            {riddles.map((riddle, index) => {
              const isSolved = solvedRiddles.includes(riddle.id);
              return (
                <Card
                  key={riddle.id}
                  className={`p-6 border-4 shadow-2xl animate-fade-in bg-white/95 backdrop-blur-sm ${
                    isSolved ? "border-green-400 bg-green-50/50" : "border-white"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-4xl">
                      {isSolved ? "✅" : "🤔"}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-700 mb-2">
                        Загадка #{riddle.id}
                      </h3>
                      <p className="text-lg text-gray-700 mb-4">{riddle.question}</p>
                      {!isSolved && (
                        <>
                          <div className="grid grid-cols-2 gap-3 mb-3">
                            {riddle.options.map((option) => (
                              <Button
                                key={option}
                                onClick={() => handleRiddleAnswer(riddle.id, option, riddle.answer)}
                                variant={selectedAnswer === option ? (option === riddle.answer ? "default" : "destructive") : "outline"}
                                className={`h-auto py-3 ${
                                  selectedAnswer === option && option === riddle.answer
                                    ? "bg-green-500 hover:bg-green-600"
                                    : ""
                                }`}
                                disabled={selectedAnswer !== null}
                              >
                                {option}
                              </Button>
                            ))}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-purple-600">
                            <Icon name="Lightbulb" size={16} />
                            <span className="italic">{riddle.hint}</span>
                          </div>
                        </>
                      )}
                      {isSolved && (
                        <div className="mt-3">
                          <div className="flex items-center gap-2 text-green-700 font-bold mb-2">
                            <Icon name="CheckCircle2" size={20} />
                            <span>Отгадано! Правильный ответ: {riddle.answer}</span>
                          </div>
                          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3">
                            <p className="text-sm text-gray-700">
                              📖 {riddle.explanation}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="progress">
            <Card className="p-6 border-4 border-white shadow-2xl bg-white/95 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-purple-700 mb-6 flex items-center gap-2">
                <Icon name="BarChart3" size={28} />
                Статистика обучения
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl p-6 text-white shadow-lg">
                  <Icon name="Target" size={32} className="mb-2" />
                  <div className="text-4xl font-bold mb-1">{quests.length}</div>
                  <div className="text-white/90">Активных квестов</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg">
                  <Icon name="Brain" size={32} className="mb-2" />
                  <div className="text-4xl font-bold mb-1">{solvedRiddles.length}/{riddles.length}</div>
                  <div className="text-white/90">Разгадано загадок</div>
                </div>
                <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl p-6 text-white shadow-lg">
                  <Icon name="Zap" size={32} className="mb-2" />
                  <div className="text-4xl font-bold mb-1">{solvedRiddles.length * 50}</div>
                  <div className="text-white/90">Всего очков</div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="characters">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {characters.map((char, index) => (
                <Card
                  key={char.name}
                  className={`p-6 text-center border-4 shadow-2xl transition-all hover:scale-105 animate-fade-in ${
                    char.unlocked
                      ? "bg-gradient-to-br from-white to-purple-50 border-purple-300"
                      : "bg-gray-100 border-gray-300 opacity-60"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`text-7xl mb-3 ${char.unlocked ? "animate-bounce-slow" : "grayscale"}`}>
                    {char.emoji}
                  </div>
                  <h3 className="font-bold text-lg text-purple-700 mb-2">{char.name}</h3>
                  <p className="text-xs text-gray-600 mb-3 min-h-[40px]">{char.description}</p>
                  {char.unlocked ? (
                    <Badge className="mt-2 bg-green-500">Открыт</Badge>
                  ) : (
                    <Badge variant="secondary" className="mt-2">Заблокирован</Badge>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={achievement.title}
                  className={`p-6 border-4 shadow-2xl animate-fade-in ${
                    achievement.earned
                      ? "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-400"
                      : "bg-white/95 border-gray-300"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`text-5xl ${achievement.earned ? "animate-bounce-slow" : "grayscale opacity-50"}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-purple-700">{achievement.title}</h3>
                      <p className="text-gray-600 mb-1">{achievement.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Sparkles" size={14} className="text-yellow-600" />
                        <span className="font-semibold text-yellow-600">+{achievement.reward} очков</span>
                      </div>
                    </div>
                    {achievement.earned && (
                      <Icon name="CheckCircle2" size={32} className="text-green-500" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="lessons">
            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <Card
                  key={lesson.title}
                  className="p-6 border-4 border-white shadow-2xl hover:scale-105 transition-transform cursor-pointer animate-fade-in bg-white/95 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-6xl animate-float">{lesson.icon}</span>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-purple-700 mb-1">{lesson.title}</h3>
                        <p className="text-gray-600 mb-2">{lesson.description}</p>
                        <div className="flex items-center gap-2 text-sm text-purple-600">
                          <Icon name="Clock" size={16} />
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        Начать урок
                        <Icon name="Play" size={18} className="ml-2" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {lesson.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;