import { useDispatch, useSelector } from 'react-redux';
import { archiveTask, pinTask } from '../modules/task';
import { RootState } from '../modules';

import { TaskList } from './TaskList';

export type TaskContainerProps = {
}

export default function TaskContainer() {
	const tasks = useSelector((state: RootState) => state.task.tasks);
	const dispatch = useDispatch();

	const onArchiveTask = (id: string) => dispatch(archiveTask(id));
	const onPinTask = (id: string) => dispatch(pinTask(id));
	const error = null;
	
	if (error) {
		return (
			<div className="page lists-show">
				<div className="wrapper-message">
					<span className="icon-face-sad" />
					<div className="title-message">
						Oh no!
					</div>
					<div className="subtitle-message">
						{error}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="page lists-show">
			<nav>
				<h1 className="title-page">
					<span className="title-wrapper">Taskbox</span>
				</h1>
			</nav>
			<TaskList tasks={tasks} onArchiveTask={onArchiveTask} onPinTask={onPinTask} loading={false} />
		</div>
	);
}
