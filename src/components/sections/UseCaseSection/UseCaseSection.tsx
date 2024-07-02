import {
  CalendarIcon,
  ListTodoIcon,
  NotebookIcon,
  TargetIcon,
} from 'lucide-react';
import styles from './UseCaseSection.module.css';
import HabitTrackerGraphic from '@/components/sections/UseCaseSection/HabitTrackerGraphic';
import TaskListGraphic from '@/components/sections/UseCaseSection/TaskListGraphic';
import JournalGraphic from '@/components/sections/UseCaseSection/JournalGraphic';
import CalendarGraphic from '@/components/sections/UseCaseSection/CalendarGraphic';

const UseCaseSection = () => {
  return (
    <section className={'max-w-[932px] my-12 mx-auto w-full px-8'}>
      <div className={'flex justify-center mb-4'}>
        <div
          className={
            'p-2 border bg-theme-bg text-theme-text border-theme-surface rounded-xl shadow-md -mx-0.5 rotate-[-5deg] hover:text-theme-main hover:scale-105 hover:z-10 hover:rotate-[-2deg] hover:bg-theme-main-bg transition-all'
          }
        >
          <TargetIcon size={32} />
        </div>
        <div
          className={
            'p-2 border bg-theme-bg text-theme-text border-theme-surface rounded-xl shadow-md -mx-0.5 rotate-[5deg]  hover:text-theme-main hover:scale-105 hover:z-10 hover:rotate-[2deg] hover:bg-theme-main-bg transition-all'
          }
        >
          <ListTodoIcon size={32} />
        </div>
        <div
          className={
            'p-2 border bg-theme-bg text-theme-text border-theme-surface rounded-xl shadow-md -mx-0.5 rotate-[-2deg]  hover:text-theme-main hover:scale-105 hover:z-10 hover:rotate-[0deg] hover:bg-theme-main-bg transition-all'
          }
        >
          <NotebookIcon size={32} />
        </div>
        <div
          className={
            'p-2 border bg-theme-bg text-theme-text border-theme-surface rounded-xl shadow-md -mx-0.5 rotate-[-8deg]  hover:text-theme-main hover:scale-105 hover:z-10 hover:rotate-[-4deg] hover:bg-theme-main-bg transition-all'
          }
        >
          <CalendarIcon size={32} />
        </div>
      </div>
      <h2
        className={
          'font-theme-display text-theme-text text-4xl font-bold text-center'
        }
      >
        Your Digital Bullet Journal
      </h2>
      <p className={'text-theme-text text-lg text-center mt-1'}>
        A simple, but powerful way to organize your life in one place
      </p>
      <div className={'grid gap-8 grid-cols-1 md:grid-cols-2 py-8'}>
        <div
          className={`${styles.card} group p-4 pb-0 flex flex-col rounded-xl hover:shadow-xm`}
        >
          <h3
            className={
              'font-theme-display font-semibold text-xl text-theme-text flex items-center gap-1 mb-2 group-hover:text-theme-main transition-colors'
            }
          >
            <TargetIcon size={32} />
            Habit Tracking
          </h3>
          <p className={'text-theme-text opacity-75 pb-16 grow'}>
            {'Track habits and keep yourself accountable to hit your goals'}
          </p>
          <div className={'self-end px-4'}>
            <HabitTrackerGraphic />
          </div>
        </div>
        <div
          className={`${styles.card} group p-4 pb-0 flex flex-col rounded-xl hover:shadow-xm`}
        >
          <h3
            className={
              'font-theme-display font-semibold text-xl text-theme-text flex items-center gap-1 mb-2 group-hover:text-theme-main transition-colors'
            }
          >
            <ListTodoIcon size={32} />
            Tasks & Reminders
          </h3>
          <p className={'text-theme-text opacity-75 pb-16 grow'}>
            {
              'All your tasks in one place, plus reminders help you stay on top of your life'
            }
          </p>
          <div className={'self-end px-4'}>
            <TaskListGraphic />
          </div>
        </div>
        <div
          className={`${styles.card} group p-4 pb-0 flex flex-col rounded-xl hover:shadow-xm`}
        >
          <h3
            className={
              'font-theme-display font-semibold text-xl text-theme-text flex items-center gap-1 mb-2 group-hover:text-theme-main transition-colors'
            }
          >
            <NotebookIcon size={32} />
            Journaling
          </h3>
          <p className={'text-theme-text opacity-75 pb-16 grow'}>
            {
              'Keep a daily journal or easily jot down thoughts as inspiration strikes'
            }
          </p>
          <div className={'self-end px-4'}>
            <JournalGraphic />
          </div>
        </div>
        <div
          className={`${styles.card} group p-4 pb-0 flex flex-col rounded-xl hover:shadow-xm`}
        >
          <h3
            className={
              'font-theme-display font-semibold text-xl text-theme-text flex items-center gap-1 mb-2 group-hover:text-theme-main transition-colors'
            }
          >
            <CalendarIcon size={32} />
            Calendar & Schedule
          </h3>
          <p className={'text-theme-text opacity-75 pb-16 grow'}>
            {
              'Plan your schedules and events with full customisation, plus sync with your existing calendar!'
            }
          </p>
          <div className={'self-end px-4'}>
            <CalendarGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
