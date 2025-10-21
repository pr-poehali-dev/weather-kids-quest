import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [completedQuests, setCompletedQuests] = useState<number[]>([]);
  const [solvedRiddles, setSolvedRiddles] = useState<number[]>([]);
  const [selectedQuest, setSelectedQuest] = useState<any | null>(null);
  const [selectedRiddle, setSelectedRiddle] = useState<any | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [coins, setCoins] = useState(50);

  const quests = [
    {
      id: 1,
      title: "☀️ Солнечное путешествие",
      description: "Узнай, как Солнце греет Землю и почему оно светит днём",
      color: "from-amber-400 to-orange-500",
      reward: 15,
      story: "Солнце — это огромная звезда! Каждый день оно встаёт на востоке и заходит на западе. Солнечные лучи дарят свет и тепло всем живым существам. Без Солнца не было бы жизни на Земле!",
      tasks: ["Понаблюдай, где встаёт солнце утром", "Найди свою тень в солнечный день", "Нарисуй солнышко"]
    },
    {
      id: 2,
      title: "☁️ Облачные приключения",
      description: "Отправляйся в путешествие по небу вместе с облаками",
      color: "from-sky-300 to-blue-400",
      reward: 15,
      story: "Облака — это капельки воды, которые летают высоко в небе. Они могут быть белыми и пушистыми, как вата, или тёмными и дождливыми. Облака постоянно меняют форму, потому что их гонит ветер!",
      tasks: ["Посмотри в окно и найди облако", "Представь, на что похоже облако", "Подожди, пока облако изменит форму"]
    },
    {
      id: 3,
      title: "🌧️ Тайна дождя",
      description: "Раскрой секрет, откуда берутся капельки дождя",
      color: "from-blue-400 to-indigo-500",
      reward: 20,
      story: "Дождь начинается в облаках! Когда капельки воды в облаке становятся большими и тяжёлыми, они падают вниз. Так получается дождь! После дождя всё вокруг становится свежим и чистым.",
      tasks: ["Послушай звук дождя", "Найди лужу после дождя", "Посчитай капли на окне"]
    },
    {
      id: 4,
      title: "🌈 Радужный мост",
      description: "Найди волшебную радугу после дождя",
      color: "from-pink-400 via-purple-400 to-blue-500",
      reward: 25,
      story: "Радуга появляется, когда солнечный свет проходит через капельки дождя. Свет разделяется на семь цветов: красный, оранжевый, жёлтый, зелёный, голубой, синий и фиолетовый. Это настоящее чудо природы!",
      tasks: ["Дождись дождя с солнцем", "Найди все 7 цветов радуги", "Загадай желание на радугу"]
    },
    {
      id: 5,
      title: "❄️ Снежная сказка",
      description: "Узнай, почему каждая снежинка уникальна",
      color: "from-cyan-300 to-blue-300",
      reward: 20,
      story: "Снежинки рождаются в холодных облаках. Каждая снежинка имеет шесть лучиков и свой уникальный узор. В мире не существует двух одинаковых снежинок! Когда много снежинок падает вместе — это снегопад.",
      tasks: ["Поймай снежинку на ладошку", "Рассмотри её узор", "Слепи снежок"]
    },
    {
      id: 6,
      title: "🌪️ Танец ветра",
      description: "Почувствуй силу невидимого ветра",
      color: "from-slate-300 to-gray-400",
      reward: 20,
      story: "Ветер — это воздух, который движется. Иногда он тихий и нежный, как дуновение, а иногда сильный и быстрый, как ураган. Ветер помогает облакам путешествовать по небу и качает деревья.",
      tasks: ["Почувствуй ветер на лице", "Посмотри, как ветер качает деревья", "Запусти бумажный самолётик"]
    }
  ];

  const riddles = [
    {
      id: 1,
      question: "Без крыльев летят, без ног бегут, без паруса плывут",
      options: ["☁️ Облака", "🦅 Птицы", "✈️ Самолёты", "🍂 Листья"],
      answer: "☁️ Облака",
      hint: "Они белые и пушистые",
      explanation: "Облака состоят из капелек воды и перемещаются благодаря ветру!"
    },
    {
      id: 2,
      question: "Меня никто не видит, но всякий слышит. А спутницу мою всяк видит, но никто не слышит",
      options: ["⚡ Гром и молния", "🌬️ Ветер и дождь", "🌙 День и ночь", "❄️ Снег и лёд"],
      answer: "⚡ Гром и молния",
      hint: "Бывает во время грозы",
      explanation: "Гром — это звук, молния — это свет! Сначала видим молнию, потом слышим гром."
    },
    {
      id: 3,
      question: "Пушистая вата плывёт куда-то. Чем вата ниже, тем дождик ближе",
      options: ["☁️ Облако", "❄️ Снег", "🌫️ Туман", "💨 Дым"],
      answer: "☁️ Облако",
      hint: "Высоко в небе белое и лёгкое",
      explanation: "Тёмные низкие облака несут дождь!"
    },
    {
      id: 4,
      question: "Крупно, дробно зачастил и всю землю напоил",
      options: ["🌧️ Дождь", "❄️ Снег", "🧊 Град", "💧 Роса"],
      answer: "🌧️ Дождь",
      hint: "Капает с неба",
      explanation: "Дождь поливает землю водой! Это важно для всего живого."
    },
    {
      id: 5,
      question: "Не огонь, а жжёт. Не фонарь, а светит",
      options: ["☀️ Солнце", "💡 Лампа", "🔥 Костёр", "🌙 Луна"],
      answer: "☀️ Солнце",
      hint: "Светит днём на небе",
      explanation: "Солнце — огромная звезда, которая даёт свет и тепло!"
    },
    {
      id: 6,
      question: "Белый, а не сахар. Мягкий, а не вата. Без ног, а идёт",
      options: ["❄️ Снег", "☁️ Облако", "🌫️ Туман", "🪶 Пух"],
      answer: "❄️ Снег",
      hint: "Падает зимой",
      explanation: "Снег — это замёрзшая вода из облаков!"
    },
    {
      id: 7,
      question: "Что за чудо-красота! Расписные ворота показались на пути, в них ни въехать, ни войти",
      options: ["🌈 Радуга", "🌉 Мост", "🚪 Ворота", "🎨 Картина"],
      answer: "🌈 Радуга",
      hint: "Семь цветов после дождя",
      explanation: "Радуга — это солнечный свет, преломлённый в капельках дождя!"
    },
    {
      id: 8,
      question: "Раскалённая стрела дуб свалила у села",
      options: ["⚡ Молния", "☄️ Метеор", "🌪️ Ураган", "🔥 Огонь"],
      answer: "⚡ Молния",
      hint: "Яркая вспышка в грозу",
      explanation: "Молния очень мощная и может расколоть дерево!"
    }
  ];

  const handleQuestComplete = (questId: number, reward: number) => {
    if (!completedQuests.includes(questId)) {
      setCompletedQuests([...completedQuests, questId]);
      setCoins(coins + reward);
    }
    setSelectedQuest(null);
  };

  const handleAnswerSelect = (answer: string, riddle: any) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === riddle.answer && !solvedRiddles.includes(riddle.id)) {
      setSolvedRiddles([...solvedRiddles, riddle.id]);
      setCoins(coins + 10);
    }
  };

  const progress = Math.round(((completedQuests.length + solvedRiddles.length) / (quests.length + riddles.length)) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-blue-300 to-purple-300 p-4 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 bg-white/40 backdrop-blur-md rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-5xl animate-bounce">🌤️</span>
            <h1 className="text-4xl font-black text-blue-900">Метеокоины</h1>
          </div>
          <p className="text-blue-800 font-medium mb-4">Исследуй мир погоды!</p>
          
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full font-bold text-xl shadow-lg flex items-center gap-2">
              <span className="text-2xl">🪙</span>
              {coins} монет
            </div>
          </div>
          
          <div className="bg-white/60 rounded-full p-2">
            <Progress value={progress} className="h-3" />
            <p className="text-sm text-blue-900 font-semibold mt-2">Прогресс: {progress}%</p>
          </div>
        </div>

        {/* Quests */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Icon name="Map" size={28} className="text-blue-900" />
            <h2 className="text-2xl font-bold text-blue-900">Квесты</h2>
          </div>
          <div className="grid gap-4">
            {quests.map((quest) => {
              const isCompleted = completedQuests.includes(quest.id);
              return (
                <Card
                  key={quest.id}
                  className={`p-5 cursor-pointer transition-all hover:scale-[1.02] border-4 ${
                    isCompleted 
                      ? "bg-green-100 border-green-400 opacity-75" 
                      : "bg-white/90 border-white shadow-xl"
                  }`}
                  onClick={() => !isCompleted && setSelectedQuest(quest)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-blue-900 mb-1">{quest.title}</h3>
                      <p className="text-gray-700 text-sm mb-2">{quest.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge className={`bg-gradient-to-r ${quest.color} text-white border-0`}>
                          +{quest.reward} 🪙
                        </Badge>
                        {isCompleted && (
                          <Badge className="bg-green-500 text-white">
                            <Icon name="CheckCircle2" size={14} className="mr-1" />
                            Пройдено
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Icon 
                      name={isCompleted ? "CheckCircle2" : "ChevronRight"} 
                      size={32} 
                      className={isCompleted ? "text-green-500" : "text-blue-600"} 
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Riddles */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Icon name="Lightbulb" size={28} className="text-blue-900" />
            <h2 className="text-2xl font-bold text-blue-900">Загадки</h2>
          </div>
          <div className="grid gap-4">
            {riddles.map((riddle) => {
              const isSolved = solvedRiddles.includes(riddle.id);
              return (
                <Card
                  key={riddle.id}
                  className={`p-5 cursor-pointer transition-all hover:scale-[1.02] border-4 ${
                    isSolved 
                      ? "bg-purple-100 border-purple-400 opacity-75" 
                      : "bg-white/90 border-white shadow-xl"
                  }`}
                  onClick={() => !isSolved && setSelectedRiddle(riddle)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="font-bold text-lg text-blue-900 mb-2">{riddle.question}</p>
                      {isSolved ? (
                        <Badge className="bg-purple-500 text-white">
                          <Icon name="CheckCircle2" size={14} className="mr-1" />
                          Разгадана
                        </Badge>
                      ) : (
                        <Badge className="bg-yellow-500 text-white">+10 🪙</Badge>
                      )}
                    </div>
                    <Icon 
                      name={isSolved ? "CheckCircle2" : "HelpCircle"} 
                      size={32} 
                      className={isSolved ? "text-purple-500" : "text-yellow-600"} 
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quest Dialog */}
        <Dialog open={!!selectedQuest} onOpenChange={() => setSelectedQuest(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedQuest && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold text-blue-900">
                    {selectedQuest.title}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-gray-700 leading-relaxed mt-4">
                    {selectedQuest.story}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 mt-6">
                  <h4 className="font-bold text-xl text-blue-900 flex items-center gap-2">
                    <Icon name="ListTodo" size={24} />
                    Твои задания:
                  </h4>
                  {selectedQuest.tasks.map((task: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 bg-blue-50 p-3 rounded-xl">
                      <span className="text-2xl">{idx + 1}.</span>
                      <p className="text-lg text-gray-800 flex-1">{task}</p>
                    </div>
                  ))}
                  
                  <Button
                    onClick={() => handleQuestComplete(selectedQuest.id, selectedQuest.reward)}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl py-6 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
                  >
                    <Icon name="CheckCircle2" size={24} className="mr-2" />
                    Квест пройден! Получить {selectedQuest.reward} 🪙
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Riddle Dialog */}
        <Dialog open={!!selectedRiddle} onOpenChange={() => {
          setSelectedRiddle(null);
          setSelectedAnswer(null);
          setShowResult(false);
        }}>
          <DialogContent className="max-w-xl">
            {selectedRiddle && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-blue-900">
                    Загадка
                  </DialogTitle>
                  <DialogDescription className="text-xl text-gray-800 font-medium leading-relaxed mt-4">
                    {selectedRiddle.question}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-3 mt-6">
                  {selectedRiddle.options.map((option: string) => (
                    <Button
                      key={option}
                      onClick={() => handleAnswerSelect(option, selectedRiddle)}
                      disabled={showResult}
                      className={`w-full text-lg py-6 rounded-xl font-bold transition-all ${
                        showResult
                          ? option === selectedRiddle.answer
                            ? "bg-green-500 text-white"
                            : option === selectedAnswer
                            ? "bg-red-500 text-white"
                            : "bg-gray-300 text-gray-600"
                          : "bg-white border-4 border-blue-300 text-blue-900 hover:bg-blue-50"
                      }`}
                    >
                      {option}
                    </Button>
                  ))}
                  
                  {showResult && (
                    <div className={`p-5 rounded-xl ${
                      selectedAnswer === selectedRiddle.answer 
                        ? "bg-green-100 border-4 border-green-500" 
                        : "bg-orange-100 border-4 border-orange-500"
                    }`}>
                      <p className="font-bold text-xl mb-2">
                        {selectedAnswer === selectedRiddle.answer ? "🎉 Правильно!" : "💡 Подсказка:"}
                      </p>
                      <p className="text-lg text-gray-800 mb-3">
                        {selectedAnswer === selectedRiddle.answer 
                          ? selectedRiddle.explanation 
                          : selectedRiddle.hint}
                      </p>
                      {selectedAnswer === selectedRiddle.answer && (
                        <Badge className="bg-yellow-500 text-white text-lg px-4 py-2">
                          +10 🪙 получено!
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Index;
