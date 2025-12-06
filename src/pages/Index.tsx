import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedObjectType, setSelectedObjectType] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const objectTypes = [
    { id: 'apartment', name: 'Квартира', basePrice: 15000, icon: 'Home' },
    { id: 'hotel', name: 'Отель', basePrice: 45000, icon: 'Building' },
    { id: 'exhibition', name: 'Выставка', basePrice: 35000, icon: 'Store' },
    { id: 'factory', name: 'Техпредприятие', basePrice: 65000, icon: 'Factory' },
  ];

  const portfolioItems = [
    {
      title: 'Премиум Квартира',
      description: 'Виртуальный тур по пентхаусу 180м²',
      image: '🏢',
      type: 'Недвижимость'
    },
    {
      title: 'Бутик-Отель',
      description: 'Полная презентация всех номеров',
      image: '🏨',
      type: 'Гостеприимство'
    },
    {
      title: 'Арт-Выставка',
      description: 'Интерактивная галерея современного искусства',
      image: '🎨',
      type: 'Культура'
    },
    {
      title: 'Производство',
      description: 'Виртуальная экскурсия по заводу',
      image: '🏭',
      type: 'Промышленность'
    },
  ];

  const faqItems = [
    {
      question: 'Сколько времени занимает создание тура?',
      answer: 'Стандартный проект занимает от 3 до 7 рабочих дней с момента съемки до финальной публикации.'
    },
    {
      question: 'Какое оборудование вы используете?',
      answer: 'Мы используем профессиональные панорамные камеры высокого разрешения и специализированное программное обеспечение для создания виртуальных туров премиум-качества.'
    },
    {
      question: 'Можно ли встроить тур на мой сайт?',
      answer: 'Да, мы предоставляем код для интеграции тура на ваш сайт, а также размещение на нашей платформе с уникальной ссылкой.'
    },
    {
      question: 'Предоставляете ли вы дополнительные услуги?',
      answer: 'Да, мы предлагаем брендирование туров, интерактивные элементы, фоновую музыку, голосовые комментарии и интеграцию с CRM-системами.'
    }
  ];

  const menuItems = [
    { label: 'Главная', href: 'hero' },
    { label: 'Калькулятор', href: 'calculator' },
    { label: 'Портфолио', href: 'portfolio' },
    { label: 'О нас', href: 'about' },
    { label: 'FAQ', href: 'faq' },
    { label: 'Контакты', href: 'contacts' },
  ];

  const selectedObject = objectTypes.find(obj => obj.id === selectedObjectType);
  const calculatedPrice = selectedObject ? selectedObject.basePrice.toLocaleString('ru-RU') : '—';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">БУЯКАША</div>
          
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-lg font-medium hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Виртуальные туры <br />
              <span className="text-primary">от «БУЯКАША»</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Ваш объект 24/7 в смартфоне у каждого покупателя
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => scrollToSection('calculator')}
            >
              ЗАКАЗАТЬ ТУР
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Калькулятор стоимости</h2>
          
          <Card className="p-8 bg-card border-border">
            <div className="space-y-6">
              <div>
                <label className="text-lg font-semibold mb-4 block">Выберите тип объекта:</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {objectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedObjectType(type.id)}
                      className={`p-6 rounded-lg border-2 transition-all hover:scale-105 ${
                        selectedObjectType === type.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <Icon name={type.icon as any} size={32} className="text-primary" />
                        <div className="text-left">
                          <div className="font-semibold text-lg">{type.name}</div>
                          <div className="text-sm text-muted-foreground">
                            от {type.basePrice.toLocaleString('ru-RU')} ₽
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Стоимость:</span>
                  <span className="text-3xl font-bold text-primary">{calculatedPrice} ₽</span>
                </div>
                {selectedObjectType && (
                  <Button 
                    className="w-full mt-6" 
                    size="lg"
                    onClick={() => scrollToSection('contacts')}
                  >
                    Оформить заказ
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши проекты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:scale-105 transition-transform cursor-pointer group"
              >
                <div className="aspect-square bg-secondary flex items-center justify-center text-6xl">
                  {item.image}
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary font-semibold mb-2">{item.type}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О нас</h2>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <span className="text-primary font-bold">БУЯКАША</span> — это команда профессионалов, 
              специализирующихся на создании виртуальных туров премиум-класса.
            </p>
            <p>
              Мы помогаем бизнесу презентовать объекты недвижимости, отели, выставочные пространства 
              и промышленные предприятия в формате интерактивных 3D-туров, доступных 24/7 с любого устройства.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">200+</div>
                <div className="text-muted-foreground">Проектов</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">5 лет</div>
                <div className="text-muted-foreground">На рынке</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Довольных клиентов</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Частые вопросы</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Готовы создать виртуальный тур? Оставьте заявку, и мы свяжемся с вами в течение часа.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="tel:+79991234567" className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
              <Icon name="Phone" size={24} />
              +7 (999) 123-45-67
            </a>
            <a href="mailto:info@buyakasha.ru" className="flex items-center gap-2 text-lg hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
              info@buyakasha.ru
            </a>
          </div>

          <Card className="p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Ваше имя" 
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Телефон" 
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <textarea 
                placeholder="Комментарий" 
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <Button size="lg" className="w-full">
                Отправить заявку
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 БУЯКАША. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
