import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import {
    ParagraphWrapper,
    ComSpace,
    ImagesGroup,
    CodeShowWrapper,
    CardWrapper,
    SmallTitle,
    Red,
    Blue,
    ComLine,
    Dot,
    Green,
    Bold,
} from '@/components/index.js'

import img446 from '@/assets/images/img446.png'
import img447 from '@/assets/images/img447.png'
import img448 from '@/assets/images/img448.png'
import img449 from '@/assets/images/img449.png'
import img450 from '@/assets/images/img450.png'
import img451 from '@/assets/images/img451.png'
import img452 from '@/assets/images/img452.png'
import img453 from '@/assets/images/img453.png'
import img454 from '@/assets/images/img454.png'
import img455 from '@/assets/images/img455.png'
import img456 from '@/assets/images/img456.png'
import img457 from '@/assets/images/img457.png'
import img458 from '@/assets/images/img458.png'
import img459 from '@/assets/images/img459.png'
import img460 from '@/assets/images/img460.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                什么是线程通信问题？
            </ParagraphWrapper>

            <ParagraphWrapper>
                打个比方，使用两个线程，交替打印 1 到 100 的数字，那么我们就需要在一个线程打印一个数字之后，告诉第二个线程，我已经打印完毕了，轮到你了，线程二才可以执行。
            </ParagraphWrapper>

            <ParagraphWrapper>
                这个就是线程的通信。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>线程的通信，其实就是几个方法的使用</Blue>，难度是比线程的同步要低的。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                关于上面线程通信的例子，首先，我们要了解一些前置知识。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>涉及到的三个方法：</Bold>
            </ParagraphWrapper>

            {/* 
                令当前线程挂起并放弃CPU、同步资源并等待，使别的线程可访问并修改共享资源，而当
                前线程排队等候其他线程调用notify()或notifyAll()方法唤醒，唤醒后等待重新获得对监视器的所有
                权后才能继续执行。
            */}

            <ParagraphWrapper>
                <Dot></Dot><Blue>wait</Blue>：令当前线程挂起并放弃CPU、同步资源并等待，使别的线程可访问并修改共享资源，而当前线程排队等候其他线程调用 notify 或 notifyAll 方法唤醒，唤醒后等待重新获得对监视器的所有权后才能继续执行（<Blue>所以说就算是 await 状态被唤醒了，也不是立即执行的，还是要等到其它正在运行的同步代码块运行到释放线程锁</Blue>）。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>notify</Blue>：一旦执行此方法，就会唤醒被wait的一个线程。如果有多个线程被wait，就唤醒优先级高的那个。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>notifyAll</Blue>：一旦执行此方法，就会唤醒所有被wait的线程。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Bold>说明：</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>1.wait，notify，notifyAll 三个方法必须使用在（synchronized 修饰的）同步代码块或同步方法中。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>2.wait，notify，notifyAll 三个方法的调用者必须是同步代码块或同步方法中的同步监视器。否则，会出现IllegalMonitorStateException异常。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>3.wait，notify，notifyAll 三个方法是定义在java.lang.Object类中。所以任意实例对象都可调用。</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面我们来尝试实现一下上面说的例子（交替打印1到100）：
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们创建一个 MyNumber 类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img446]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们到 main 方法中，创建两个线程进行执行：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img447]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们可以看看代码的运行顺序，注意看注释
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img448]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>另外，可以观察到，sleep 和 wait 的调用者不同。</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Bold>{`sleep() 和 wait()的异同？`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
            <   Dot></Dot>相同点：一旦执行方法，都可以使得当前的线程进入阻塞状态。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>不同点：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>
                    {`1、两个方法声明的位置不同：Thread 类中声明 sleep() , Object 类中声明 wait()`}
                </Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>
                    {`2、调用的要求不同：sleep()可以在任何需要的场景下调用。 wait()必须使用在同步代码块或同步方法中`}
                </Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>
                    {`3、关于是否释放同步监视器：如果两个方法都使用在同步代码块或同步方法中，sleep()不会释放锁，wait()会释放锁`}
                </Bold>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面来个经典例题，<Bold>生产者与消费者的问题（实际上也是线程通信的一种应用）：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>就像是做包子，还有卖包子，且要保证做一个包子，就卖一个包子的情况。有可能是包子做太快，导致“产能溢出”，或者是包子还没有做出来，但是却卖出去了，导致“虚空卖包”。</ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>生产者（Productor）将产品交给店员（Clerk），而消费者（Customer）从店员处取走产品，店员一次只能持有固定数量的产品（比如:20），如果生产者试图生产更多的产品，店员会叫生产者停一下，如果店中有空位放产品了再通知生产者继续生产；如果店中没有产品了，店员会告诉消费者等一下，如果店中有产品了再通知消费者来取走产品。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>这里可能会出现两个问题：
            </ParagraphWrapper>

            <ParagraphWrapper>
                1、生产者比消费者快时，消费者会漏掉一些数据没有取到。
            </ParagraphWrapper>

            <ParagraphWrapper>
                2、消费者比生产者快时，消费者会取相同的数据。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                下面开始分析一下：
            </ParagraphWrapper>

            <ParagraphWrapper>
                这个例子，是否是多线程？是的。可以分为基础的两个线程，生产者线程还有消费者线程。
            </ParagraphWrapper>
            <ParagraphWrapper>
                既然是多线程，那么就要考虑是否有线程安全问题，说到线程安全问题，就首先要考虑“是否有共享数据”。显然是有的。
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以这个例题，实际上涉及了<Bold>多线程的创建、同步问题的解决、线程之间的通信</Bold>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                下面开始上代码：
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们整 3 个类，一个“店员”类 Clerk。一个“生产者”类 Productor。一个“消费者” Customer。其中，Customer 消费者类和 Productor 生产者类，是两个线程类，分别需要传入一个 Clerk 店员类，作为内部属性。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img449, img450, img451]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后，我们可以来到 main 方法中，先创建 生产者 还有 消费者 实例（传入同一个 Clerk 店员实例，作为构造器参数），然后分别调用生产者以及消费者实例的线程启动方法 start：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img452]}
            ></ImagesGroup>

            <ParagraphWrapper>
                下面的重心，就是来写这两个线程类的 run 方法。首先，我们来到 Clerk 店员类中，添加一个“生产产品”的方法 produceProduct：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img453]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后，我们来到 Productor 中，初步编写 run 方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img454]}
            ></ImagesGroup>

            <ParagraphWrapper>
                目前主要是在 run 方法中，循环调用 店员实例的 produceProduct 方法，且其中插入延时。
            </ParagraphWrapper>

            <ParagraphWrapper>
                类似的，我们去 Clerk 类中，添加一个 comsumeProduct 消费方法（消费不止是从消费者的角度看的，其实店员卖出店里的产品，就算是对店内产品的一种消费），然后来到 Customer 类的 run 方法中，使用 店员实例循环调用：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img455, img456]}
            ></ImagesGroup>

            <ParagraphWrapper>
                接着，我们的重心来到 店员类 Clerk 中，看看 comsumeProduct 还有 produceProduct 方法的具体实现：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img457]}
            ></ImagesGroup>
            <ParagraphWrapper>
                这里有个小注意点，逻辑上的，生产的 + 1 是在输出之前的，而消费 - 1 是在输出之后的。很简单，但是容易忽略。
            </ParagraphWrapper>

            <ParagraphWrapper>
                这里我们定义了一个 “产品数量” pruductCount，然后在它小于 20 的时候，如果调用 produceProduct 方法，就会数量加一（生产一个产品）。在它大于 0 的时候，如果调用 comsumeProduct 方法，则会数量减一（消费产品）。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                然后这里我们分析下，是不是有线程同步的问题需要解决？是的，生产和消费，我们需要保证执行完了一个再执行另一个，想想一下，生产执行到一半，此时消费同时执行，且瞬间完成，那么生产出来的产品数量就是错的了。
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以，我们先来解决下线程同步的问题。保证生产和消费这两个操作共享数据的方法，在同一个时间里，只能执行一个。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img458]}
            ></ImagesGroup>

            <ParagraphWrapper>
                如上图，因为这两个方法里，恰好就是各自操作同步数据的独立代码，所以，使用“同步方法”的做法更加方便快捷。同步方法，默认的是使用 this（也就是实例对象）作为同步锁的。可以看到 main 方法中，我们也只是 new 了一个 Clerk 实例对象，刚好。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                线程同步的问题解决了，但是还是存在线程通信的问题的。回想一下，在没有通信控制的时候，多线程执行，其实是有可能只是其中一个线程一直抢到资源执行，而其它线程又因为线程锁，无法执行。
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以通信问题，放在这个例题里，就会实际出现，一直生产不停而不消费的情况（或者反之），哪怕是产品数量已经达到20，还是可能一直调用生产方法（看运气，运气不好，这个线程比较强势，就会这样），当然了，也是可能是一直“消费”，而不生产的。
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以，为了确保生产与消费之间的相互执行，就需要使用“线程之间的通信”，首先，我们在生产到达20件还在继续调用生产方法的情况，还有在消费已经消费到0件还在调用消费方法的情况下，调用 wait 方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img459]}
            ></ImagesGroup>

            <ParagraphWrapper>
                当然，在使用了 wait 之后，就要考虑在哪里使用 notify 方法了。答案是在生产和消费的代码刚刚执行之后，就可以调用了。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img460]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实思路上很好理解，因为刚生产完，那就确保了至少有一件产品可以消费。而消费方法，不管是什么情况，在每次消费之后，其实都可以唤醒生产。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module